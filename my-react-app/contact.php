<?php
require_once __DIR__ . '/reCaptcha.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

function get_default_mail_from_address(): string
{
    $host = strtolower((string) ($_SERVER["HTTP_HOST"] ?? ''));
    $host = preg_replace('/:\\d+$/', '', $host) ?? '';
    $host = preg_replace('/^www\./', '', $host) ?? '';

    if ($host !== '' && preg_match('/^[a-z0-9.-]+\.[a-z]{2,}$/', $host) === 1) {
        return "no-reply@$host";
    }

    return 'no-reply@example.invalid';
}

$adminEmail = get_recaptcha_config_value('ADMIN_EMAIL');
$mailFromAddress = get_recaptcha_config_value('MAIL_FROM_ADDRESS', get_default_mail_from_address());
$mailFromName = get_recaptcha_config_value('MAIL_FROM_NAME', 'SK Blind Guardians');

function send_json_response(int $statusCode, array $payload): void
{
    http_response_code($statusCode);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function get_request_data(): array
{
    if (!empty($_POST)) {
        return $_POST;
    }

    $rawBody = file_get_contents('php://input');

    if (!is_string($rawBody) || trim($rawBody) === '') {
        return [];
    }

    $decoded = json_decode($rawBody, true);

    return is_array($decoded) ? $decoded : [];
}

function create_mail_headers(string $fromAddress, string $fromName, ?string $replyTo = null): string
{
    $sanitizedFromAddress = str_replace(["\r", "\n"], '', $fromAddress);
    $sanitizedFromName = str_replace(["\r", "\n"], '', $fromName);
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= 'From: ' . sprintf('"%s" <%s>', $sanitizedFromName, $sanitizedFromAddress) . "\r\n";

    if ($replyTo !== null && $replyTo !== '') {
        $sanitizedReplyTo = str_replace(["\r", "\n"], '', $replyTo);
        $headers .= "Reply-To: $sanitizedReplyTo\r\n";
    }

    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    return $headers;
}

function send_html_mail(string $to, string $subject, string $body, string $headers): bool
{
    return mail($to, $subject, $body, $headers);
}

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(204);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    send_json_response(405, ["error" => "Pouze POST požadavky jsou povoleny"]);
}

if ($adminEmail === '' || !filter_var($adminEmail, FILTER_VALIDATE_EMAIL)) {
    error_log('Mail configuration error: ADMIN_EMAIL is missing or invalid.');
    send_json_response(500, ["error" => "E-mailová konfigurace serveru není dostupná."]);
}

if (!filter_var($mailFromAddress, FILTER_VALIDATE_EMAIL)) {
    error_log('Mail configuration error: MAIL_FROM_ADDRESS is invalid.');
    send_json_response(500, ["error" => "E-mailová konfigurace serveru není dostupná."]);
}

$requestData = get_request_data();

$email = trim((string) ($requestData["email"] ?? ""));
$message = trim((string) ($requestData["message"] ?? ""));
$honeypot = trim((string) ($requestData["fax"] ?? ""));
$recaptchaToken = trim((string) ($requestData["recaptchaToken"] ?? ""));
$recaptchaAction = trim((string) ($requestData["recaptchaAction"] ?? ""));

if ($honeypot !== '') {
    send_json_response(200, ["message" => "OK"]);
}

if ($email === '' || $message === '') {
    send_json_response(400, ["error" => "Email a zpráva jsou povinné"]);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    send_json_response(400, ["error" => "Neplatný email"]);
}

if ($recaptchaToken === '') {
    send_json_response(400, ["error" => "Bezpečnostní kontrola se nepodařila. Zkuste to znovu."]);
}

$expectedRecaptchaAction = 'contact_form';

if ($recaptchaAction !== '' && $recaptchaAction !== $expectedRecaptchaAction) {
    send_json_response(400, ["error" => "Neplatná akce formuláře."]);
}

$safeEmail = str_replace(["\r", "\n"], '', $email);
$escapedMessage = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Obsahová validace
$spam_phrases = [
    'buy now',
    'cheap meds',
    'viagra',
    'free bitcoin',
    'online casino',
    'win big',
    'porn',
    'http',
    'https',
    'www.'
];

$messageLower = strtolower($message);
foreach ($spam_phrases as $phrase) {
    if (strpos($messageLower, $phrase) !== false) {
        send_json_response(400, ["error" => "Zpráva obsahuje zakázaný obsah."]);
    }
}

// Délka zprávy
if (strlen($message) < 10) {
    send_json_response(400, ["error" => "Zpráva je příliš krátká."]);
}

if (strlen($message) > 2000) {
    send_json_response(400, ["error" => "Zpráva je příliš dlouhá."]);
}

// Počet URL
if (preg_match_all('/https?:\/\/[^\s]+/i', $message, $matches) > 2) {
    send_json_response(400, ["error" => "Zpráva obsahuje příliš mnoho odkazů."]);
}

$recaptchaVerification = verify_recaptcha_v3($recaptchaToken, $expectedRecaptchaAction, [
    'secretKey' => get_recaptcha_config_value('RECAPTCHA_SECRET_KEY') ?: get_recaptcha_config_value('SECRET_KEY'),
    'minScore' => get_recaptcha_config_value('RECAPTCHA_MIN_SCORE', '0.5'),
]);

if (($recaptchaVerification['success'] ?? false) !== true) {
    $logContext = [
        'message' => $recaptchaVerification['message'] ?? 'reCAPTCHA failed',
        'debugMessage' => $recaptchaVerification['debugMessage'] ?? null,
        'score' => $recaptchaVerification['score'] ?? null,
        'reasons' => $recaptchaVerification['reasons'] ?? [],
        'reason' => $recaptchaVerification['reason'] ?? null,
    ];
    error_log('reCAPTCHA verification rejected request: ' . json_encode($logContext));

    send_json_response((int) ($recaptchaVerification['statusCode'] ?? 403), [
        'error' => $recaptchaVerification['message'] ?? 'Bezpečnostní kontrola selhala.',
    ]);
}

// Odeslání e-mailu
$subject = "Nová zpráva z kontaktního formuláře od $safeEmail";
$adminHeaders = create_mail_headers($mailFromAddress, $mailFromName, $safeEmail);
$adminBody = "
<h3>Nová zpráva z kontaktního formuláře</h3>
<p><strong>Od:</strong> $safeEmail</p>
<p><strong>reCAPTCHA score:</strong> " . htmlspecialchars((string) ($recaptchaVerification['score'] ?? ''), ENT_QUOTES, 'UTF-8') . "</p>
<p><strong>Zpráva:</strong></p>
<p>" . nl2br($escapedMessage) . "</p>
";

if (!send_html_mail($adminEmail, $subject, $adminBody, $adminHeaders)) {
    send_json_response(500, ["error" => "Chyba při odesílání zprávy"]);
}

$confirmationSubject = 'Potvrzení o přijetí zprávy | SK Blind Guardians';
$confirmationHeaders = create_mail_headers($mailFromAddress, $mailFromName, $adminEmail);
$confirmationBody = "
<h3>Děkujeme za vaši zprávu</h3>
<p>Dobrý den,</p>
<p>potvrzujeme přijetí vaší zprávy. Ozveme se vám co nejdříve.</p>
<p><strong>Kopie vaší zprávy:</strong></p>
<p>" . nl2br($escapedMessage) . "</p>
<p>S pozdravem,<br>SK Blind Guardians</p>
";

$confirmationSent = send_html_mail($safeEmail, $confirmationSubject, $confirmationBody, $confirmationHeaders);

if (!$confirmationSent) {
    error_log('Confirmation email could not be sent to: ' . $safeEmail);
    send_json_response(200, [
        "message" => "Zpráva byla úspěšně odeslána. Potvrzení na váš email se ale nepodařilo doručit.",
    ]);
}

send_json_response(200, ["message" => "Zpráva byla úspěšně odeslána a kopie byla poslána i na váš email."]);
?>
