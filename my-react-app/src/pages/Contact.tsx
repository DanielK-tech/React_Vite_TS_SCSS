import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "../styles/contactMap.scss";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
/**styl */
import "../styles/contact.scss";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const Contact: React.FC = () => {
  const [position] = useState({ lat: 49.8209, lng: 17.8794 });
  const [mapLoaded, setMapLoaded] = useState(false);
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
    setMapLoaded(true);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Zpráva byla úspěšně odeslána. Děkujeme!",
        });
        // Reset form
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
        {mapLoaded && (
          <MapContainer
            center={[position.lat, position.lng]}
            zoom={13}
            className="contact-map"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <Marker position={[position.lat, position.lng]} icon={DefaultIcon}>
              <Popup>Kontaktní adresa: Leskovec 22, Březová</Popup>
            </Marker>
          </MapContainer>
        )}
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
                  required
                  placeholder="Co máte na srdci?"
                  rows={15}
                  cols={50}
                />
                {messageError && <span className="error">{messageError}</span>}
              </div>

              <button type="submit" disabled={isSubmitting} className="btn">
                {isSubmitting ? "Odesílání..." : "Odeslat zprávu"}
              </button>

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
