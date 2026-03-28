import React, { useState } from "react";
import "../styles/contactMap.scss";
/**styl */
import "../styles/contact.scss";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new URLSearchParams();
      formData.append("email", email);
      formData.append("message", message);

      const response = await fetch("https://skblindguardians.cz/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Zpráva byla úspěšně odeslána. Děkujeme!",
        });
        setEmail("");
        setMessage("");
      } else {
        const error = await response.text();
        throw new Error(error || "Došlo k chybě při odesílání zprávy.");
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
