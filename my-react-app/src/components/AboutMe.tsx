import React, { useState, useEffect } from "react";
//navigace
import { useNavigate, useLocation } from "react-router-dom";
/** Komponenty */
import OurService from "./OurServices";
import Foto from "./FotoSection";  
import HorseTeam from "./subComponents/HorseTeam";
//data 
import horseData from "./data/dataKone";

/** Styly */
import "./AboutUs.scss";

const About: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation(); 
  //
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const [isHorseVisible, setIsHorseVisible] = useState(false);
  // Synchronizace stavu s URL
  useEffect(() => {
    setIsTeamVisible(location.pathname === "/about/our-team");
    setIsHorseVisible(location.pathname === "/about/our-horses");
  }, [location.pathname]);

  const toggleTeam = () => {
    if (isTeamVisible) {
      setIsTeamVisible(false);
      navigate("/about");
    } else {
      setIsTeamVisible(true);
      setIsHorseVisible(false);
      navigate("/about/our-team");
    }
  };

   const toggleHorses = () => {
    if (isHorseVisible) {
      setIsHorseVisible(false);
      navigate("/about");
    } else {
      setIsHorseVisible(true);
      setIsTeamVisible(false);
      navigate("/about/our-horses");
    }
  };
  return (
    <section className="HomeSection" id="Home" tabIndex={0}>
      <div className="aboutUs">
        <h2>O nás</h2>
        <p>
          Jsme malá stáj rodinného typu na severní Moravě. V roce 2024 jsme
          založili spolek zaměřený na volnočasové jezdecké aktivity pro děti a
          mládež především z blízkého okolí a začali se angažovat v
          hiporehabilitačních aktivitách, které nabízíme i široké veřejnosti.
          Jsme členy České jezdecké federace (ČJF), Moravského pony klubu a
          České hiporehabilitační společnosti (ČHS).
        </p>
        <p>
          Členové našeho týmu se hiporehabilitačním aktivitám věnují již od roku
          2009, v roce založení spolku se nám proto povedlo získat status
          Registrovaného střediska ČHS a certifikát pro hiporehabilitaci v
          pedagogické a sociální praxi.
        </p>
        <p>
          Aktivity našich členů jsou již dlouhodobě spjaty i s péčí a výcvikem
          různě zrakově znevýhodněných koní. Od roku 2023 jsme v přátelském
          kontaktu s neziskovkou Naděje pro slepé koně, z.s., se kterou jsme
          proto od našeho založení navázali úzkou spolupráci a nabízíme v tomto
          směru pomoc a poradenství majitelům především zde na severovýchodě
          republiky.
        </p> 
        <div className="buttons"> 

        <button className="btn" onClick={toggleTeam}>
          Náš team
        </button> 
        <button className="btn" onClick={toggleHorses}>
          Naše koně
        </button>
        </div>
        {/* Sem vlož obsah týmu */}
        {isTeamVisible && (
          <div className="team-content">
            <div className="contact">
              <span className="squareSpan"></span>
              <div className="content">
                <div className="face worker"></div>
                <h3>Bc. Jana Pospíšilová </h3>
                <p>
                  od roku 2004 je držitelem ČJF licence instruktora jezdectví a
                  věnuje se jezdeckému výcviku a sportovní přípravě dětí a
                  mládeže, od roku 2009 se angažuje jako asistent a instruktor
                  výcviku koní v hiporehabilitaci - od té doby je i
                  individuálním členem ČHS a od roku 2024 členem pracovní
                  skupiny Hiporehabilitace v kontaktní terapii. Od roku 2024 je
                  též certifikovaným rozhodčím pro disciplíny parkur, skok
                  mohutnosti a drezura pod Českou hobby horsingovou asociací a
                  trenérsky vede sportovní kroužek hobby horsingu.
                </p>
              </div>
            </div>
            {/* další */}
            <div className="contact">
              <span className="squareSpan"></span>
              <div className="content">
                <div className="face worker"></div>
                <h3>Eva Kolegarová, DiS </h3>
                <p>
                  již od dětských let se věnuje práci a aktivitám především se
                  zdravotně znevýhodněnou mládeží, během studií se začala
                  věnovat zooterapeutickým aktivitám včetně hiporehabilitace, má
                  bohaté zkušenosti z fungování a praxi v mnoha
                  hiporehabilitačních střediscích po celé ČR. Profesně se věnuje
                  sociální práci s dětmi a mládeží, ve volném čase působí jako
                  jedna z vedoucích 8. Přední hlídky Royal Rangers - Zlín. V
                  roce 2024 úspěšně dokončila specializační kurz ČHS a stala se
                  certifikovanou instruktorkou pro hiporehabilitaci v
                  pedagogické a sociální práci pro ČR.
                </p>
              </div>
            </div>
            {/* další */}
            <div className="contact">
              <span className="squareSpan"></span>
              <div className="content">
                <div className="face worker"></div>
                <h3>Petra Luzarová, DiS </h3>
                <p>
                  má dlouholeté zkušenosti s prací s dětmi a mládeží coby
                  vedoucí vodáckého skautského spolku Poseidon. Aktuálně se
                  zaměřuje zejména na vozatajské aktivity s poníky, je hlavním
                  mentorem v přípravě práce na ruce na oprati a přípravě na
                  zápřah.
                </p>
              </div>
            </div>
          </div>
        )}  
        {isHorseVisible && (
  <div className="horse-content-conatiner">
    {horseData.map((horse, index) => (
      <HorseTeam
        key={index}
        name={horse.name}
        origin={horse.origin}
        born={horse.born}
        breeder={horse.breeder}
        owner={horse.owner}
        description={horse.description}
      />
    ))}
  </div>
)}
      </div>
      <OurService />
      <Foto />
    </section>
  );
};

export default About;
