<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["error" => "Pouze POST požadavky jsou povoleny"]);
    exit;
}

// Zde používáme $_POST místo json_decode
if (empty($_POST["email"]) || empty($_POST["message"])) {
    http_response_code(400);
    echo json_encode(["error" => "Email a zpráva jsou povinné"]);
    exit;
}

// Honeypot – ochrana proti botům
if (!empty($_POST['fax'])) {
    exit; // Bot odeslal neviditelné pole
}

// Ošetři vstupy
$from = htmlspecialchars($_POST["email"]);
$message = htmlspecialchars($_POST["message"]);

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
        http_response_code(400);
        echo json_encode(["error" => "Zpráva obsahuje zakázaný obsah."]);
        exit;
    }
}

// Délka zprávy
if (strlen($message) < 10) {
    http_response_code(400);
    echo json_encode(["error" => "Zpráva je příliš krátká."]);
    exit;
}

if (strlen($message) > 1000) {
    http_response_code(400);
    echo json_encode(["error" => "Zpráva je příliš dlouhá."]);
    exit;
}

// Počet URL
if (preg_match_all('/https?:\/\/[^\s]+/i', $message, $matches) > 2) {
    http_response_code(400);
    echo json_encode(["error" => "Zpráva obsahuje příliš mnoho odkazů."]);
    exit;
}

// Odeslání e-mailu
$to = "Jana.Stixova@seznam.cz";
$subject = "Nová zpráva z kontaktního formuláře od $from";

$headers = "From: $from\r\n";
$headers .= "Reply-To: $from\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

$body = "
<h3>Nová zpráva z kontaktního formuláře</h3>
<p><strong>Od:</strong> $from</p>
<p><strong>Zpráva:</strong></p>
<p>$message</p>
";

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["message" => "Zpráva byla úspěšně odeslána"]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Chyba při odesílání zprávy"]);
}
?>
