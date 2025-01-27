import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./dialog.scss";
/** Komponenty */
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeInfo from "./components/MainContent";
import About from "./components/AboutMe";
import Contact from "./components/Contact";
/**FotoGalerie */
import GaleryPhoto from "./components/subComponents/PhotoGalery";
import "leaflet/dist/leaflet.css"; //Mapa!!!!!!!!!!
/** SVG **/
// import "./App.css";

function App() {
  interface CookiePreferences {
    necessary: boolean; // Vždy true, protože nutné cookies nelze vypnout
    functional: boolean;
    analytics: boolean;
    marketing: boolean;
  }
  // const [count, setCount] = useState(0)
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false,
  });
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allPreferences);
    savePreferences(allPreferences);
    dialogRef.current?.close();
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
    dialogRef.current?.close();
  };

  const handleRejectAll = () => {
    const minimalPreferences = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    setPreferences(minimalPreferences);
    savePreferences(minimalPreferences);
    dialogRef.current?.close();
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookiePreferences", JSON.stringify(prefs));
    setShowCookieBanner(false);
  };

  useEffect(() => {
    const savedPreferences = localStorage.getItem("cookiePreferences");
    if (savedPreferences) {
      setPreferences(JSON.parse(savedPreferences));
      setShowCookieBanner(false);
    } else {
      dialogRef.current?.showModal();
    }
  }, []);
  const togglePreference = (category: keyof CookiePreferences) => {
    if (category === "necessary") return; // Nutné cookies nelze měnit
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };
  // přepínač mezi třídami
  const [preferencesVisible, setPreferencesVisible] = useState(false);

  const togglePreferences = () => {
    setPreferencesVisible((prev) => !prev);
  };

  // const handleOptionSelect = () => {
  //     setPreferencesVisible(false); // Skryje možnosti po výběru
  // };
  return (
    <>
      <BrowserRouter>
        <Header /> {/* Navigace dostupná na všech stránkách */}
        <main>
          <Routes>
            {/* Definujeme routy v mainu */}
            <Route path="/*" element={<HomeInfo />} /> {/* Úvodní stránka */}
            <Route path="/about/*" element={<About />} />{" "}
            {/* O mně + všechno co je na té stránce  /**/}
            <Route path="/contact" element={<Contact />} /> {/* Kontakt */}
            <Route path="/foto-galery" element={<GaleryPhoto />} />{" "}
            {/* FotoGalerie */}
          </Routes>
        </main>
        {showCookieBanner && (
          <dialog ref={dialogRef} className="cookie-dialog">
            <form method="dialog">
              <h2>Informace o cookies na této stránce</h2>
              <p>
                {/* Tento web používá cookies pro zajištění
                                nejlepšího uživatelského zážitku. Souhlasíte s
                                použitím cookies? */}
                Soubory cookie používáme ke shromažďování a analýze informací o
                výkonu a používání webu, zajištění fungování funkcí ze
                sociálních médií a ke zlepšení a přizpůsobení obsahu a reklam.
              </p>
              <div className="more">
                <label className="mainLabel" onClick={togglePreferences}>
                  <i className="fa-solid fa-gear"></i>
                  Možnosti
                </label>
              </div>
              <div
                className={`cookie-preferences ${
                  preferencesVisible ? "visible" : "hidden"
                }`}
              >
                <label>
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                  />
                  Nutné (nelze vypnout)
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={() => togglePreference("functional")}
                  />
                  Funkční
                  <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  <p>
                    Funkční cookies jsou typem cookies, které zlepšují
                    uživatelský zážitek na webových stránkách tím, že si
                    pamatují vaše volby a preference. Například si mohou
                    zapamatovat váš výběr jazyka, regionu nebo jiné nastavení,
                    které jste na webu provedli
                  </p>
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => togglePreference("analytics")}
                  />
                  Analytické
                  <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  <p>
                    Analytické cookies, také známé jako statistické cookies, se
                    používají ke shromažďování informací o tom, jak návštěvníci
                    používají webové stránky. Tyto cookies sledují například,
                    které stránky jsou nejnavštěvovanější, jak dlouho na nich
                    uživatelé zůstávají, a jaké funkce používají
                  </p>
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={() => togglePreference("marketing")}
                  />
                  Marketingové
                  <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  <p>
                    Marketingové cookies se používají k sledování návštěvníků
                    napříč webovými stránkami a k vytváření profilů jejich
                    zájmů. Tyto cookies umožňují zobrazovat personalizované
                    reklamy, které jsou relevantní pro jednotlivé uživatele, což
                    zvyšuje efektivitu reklamních kampaní
                  </p>
                </label>
              </div>
              <div className="button-container">
                <button onClick={handleAcceptAll}>Přijmout všechny</button>
                <button type="button" onClick={handleSavePreferences}>
                  Uložit výběr
                </button>
                <button onClick={handleRejectAll}>Odmítnout</button>
              </div>
            </form>
          </dialog>
        )}
        ;
        <Footer /> {/* Patička dostupná na všech stránkách */}
      </BrowserRouter>
    </>
  );
}

export default App;
