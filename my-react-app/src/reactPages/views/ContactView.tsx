import React, { useEffect, useState } from "react";
import "../../styles/contactMap.scss";
/**styl */
import "../../styles/contact.scss";

const CONTACT_ENDPOINT =
  import.meta.env.PUBLIC_CONTACT_ENDPOINT ||
  "https://skblindguardians.cz/contact.php";
const RECAPTCHA_ACTION = "contact_form";
const RECAPTCHA_LOAD_TIMEOUT_MS = 5000;
const RECAPTCHA_SCRIPT_ID = "google-recaptcha-v3-script";

interface RecaptchaClient {
  ready(callback: () => void): void;
  execute(siteKey: string, options: { action: string }): Promise<string>;
}

declare global {
  interface Window {
    __RECAPTCHA_SITE_KEY__?: string;
    grecaptcha?: RecaptchaClient;
  }
}

const getConfiguredSiteKey = () => {
  const siteKeyFromWindow = window.__RECAPTCHA_SITE_KEY__;
  const siteKeyFromDocument =
    document.documentElement.dataset.recaptchaSiteKey || "";

  return siteKeyFromWindow || siteKeyFromDocument;
};

const loadRecaptchaScript = () => {
  const existingScript = document.getElementById(
    RECAPTCHA_SCRIPT_ID,
  ) as HTMLScriptElement | null;

  if (window.grecaptcha) {
    return Promise.resolve();
  }

  if (existingScript) {
    return new Promise<void>((resolve, reject) => {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener(
        "error",
        () => reject(new Error("reCAPTCHA skript se nepodařilo načíst.")),
        { once: true },
      );
    });
  }

  return new Promise<void>((resolve, reject) => {
    const siteKey = getConfiguredSiteKey();

    if (!siteKey) {
      reject(
        new Error(
          "reCAPTCHA site key není nakonfigurovaný. Nastavte PUBLIC_RECAPTCHA_SITE_KEY nebo SITE_KEY.",
        ),
      );
      return;
    }

    const script = document.createElement("script");

    script.id = RECAPTCHA_SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener(
      "error",
      () => reject(new Error("reCAPTCHA skript se nepodařilo načíst.")),
      { once: true },
    );

    document.head.appendChild(script);
  });
};

const parseResponseMessage = async (response: Response) => {
  const responseText = await response.text();

  if (!responseText) {
    return "";
  }

  try {
    const responseBody = JSON.parse(responseText) as {
      error?: string;
      message?: string;
    };

    return responseBody.error || responseBody.message || responseText;
  } catch {
    return responseText;
  }
};

const waitForRecaptcha = () =>
  new Promise<RecaptchaClient>((resolve, reject) => {
    const startedAt = Date.now();

    const tryResolve = () => {
      const client = window.grecaptcha;

      if (client) {
        resolve(client);
        return;
      }

      if (Date.now() - startedAt >= RECAPTCHA_LOAD_TIMEOUT_MS) {
        reject(
          new Error(
            "Bezpečnostní kontrola se nenačetla. Obnovte stránku a zkuste to znovu.",
          ),
        );
        return;
      }

      window.setTimeout(tryResolve, 100);
    };

    tryResolve();
  });

const getRecaptchaToken = async () => {
  await loadRecaptchaScript();
  const recaptchaClient = await waitForRecaptcha();
  const siteKey = getConfiguredSiteKey();

  if (!siteKey) {
    throw new Error(
      "reCAPTCHA site key není nakonfigurovaný. Nastavte PUBLIC_RECAPTCHA_SITE_KEY nebo SITE_KEY.",
    );
  }

  return new Promise<string>((resolve, reject) => {
    recaptchaClient.ready(() => {
      recaptchaClient
        .execute(siteKey, { action: RECAPTCHA_ACTION })
        .then((token) => {
          if (!token) {
            reject(
              new Error(
                "Bezpečnostní kontrolu se nepodařilo dokončit. Zkuste to prosím znovu.",
              ),
            );
            return;
          }

          resolve(token);
        })
        .catch(() => {
          reject(
            new Error(
              "Bezpečnostní kontrolu se nepodařilo ověřit. Zkuste to prosím znovu.",
            ),
          );
        });
    });
  });
};

const Contact: React.FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    void loadRecaptchaScript().catch((error) => {
      console.error(error);
    });
  }, []);

  const validateForm = () => {
    let valid = true;

    // Validate email
    if (!email.trim()) {
      setEmailError("Email je povinný");
      valid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError("Neplatný email");
      valid = false;
    } else {
      setEmailError("");
    }

    // Validate message
    if (!message.trim()) {
      setMessageError("Zpráva je povinná");
      valid = false;
    } else {
      setMessageError("");
    }

    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const honeypotValue = new FormData(form).get("fax")?.toString() || "";
      const recaptchaToken = await getRecaptchaToken();
      const formData = new URLSearchParams();
      formData.append("email", email.trim());
      formData.append("message", message.trim());
      formData.append("fax", honeypotValue);
      formData.append("recaptchaToken", recaptchaToken);
      formData.append("recaptchaAction", RECAPTCHA_ACTION);

      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const responseMessage = await parseResponseMessage(response);

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: responseMessage || "Zpráva byla úspěšně odeslána. Děkujeme!",
        });
        setEmail("");
        setMessage("");
      } else {
        throw new Error(
          responseMessage || "Došlo k chybě při odesílání zprávy.",
        );
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Došlo k chybě při odesílání zprávy.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="oneHundertDVH " id="Home" tabIndex={0}>
      <div className="map">
        <div className="contact">
          <span className="squareSpan"></span>
          <div className="content">
            <h2>Kontakt</h2>
            <p className="firstParagraph">SK Blind Guardians</p>
            <p>
              <span>Adresa:</span> Leskovec 22, Březová, Czech Republic
            </p>
            <p>
              <span>Telefon:</span> +420 777 082 915
            </p>
            <p>
              <span>Email:</span> jana.stixova@seznam.cz
            </p>
          </div>
        </div>
        <iframe
          className="contact-map"
          title="Mapa kontaktní adresy Blind Guardians"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.openstreetmap.org/export/embed.html?bbox=17.8575%2C49.8123%2C17.9011%2C49.8295&layer=mapnik&marker=49.8209%2C17.8794"
        />
      </div>
      <div className="support ">
        <div className="paymentChance">
          <div className="Text">
            <p>
              Naši činnost můžete podpořit zasláním libovolné částky na
              transparentní účet
            </p>
            <p className="bold">1701279002/2700</p>
            <p>
              Pokud preferujete raději hmotný dar či přímou nefinanční pomoc,
              budeme vděční, když nás podpoříte nákupem krmiva a vybavení pro
              naše svěřence, materiálem pro budování zázemí či pomůckami pro
              péči o zrakově handicapované koně a pro jejich výcvik.{" "}
            </p>
            <p className="bold">
              Potvrzení o poskytnutí daru pro daňové účely vám na přání
              vystavíme.
            </p>
          </div>

          <div className="contactForm">
            <h3>Napište nám</h3>
            <form onSubmit={handleSubmit}>
              <div className="formGroup">
                <label htmlFor="email">Váš email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Zadejte svůj email"
                />
                {emailError && <span className="error">{emailError}</span>}
              </div>

              <div className="formGroup">
                <label htmlFor="message">Vaše zpráva:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Co máte na srdci?"
                  rows={15}
                  cols={50}
                />
                {messageError && <span className="error">{messageError}</span>}
              </div>

              <button type="submit" disabled={isSubmitting} className="btn">
                <p>{isSubmitting ? "Odesílání..." : "Odeslat zprávu"}</p>
              </button>
              <input
                type="text"
                name="fax"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />
              {submitStatus && (
                <div className={`submitStatus ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
