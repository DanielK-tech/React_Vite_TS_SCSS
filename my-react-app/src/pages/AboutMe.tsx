import React, { useState, useEffect, useRef } from "react";
// import { UIContext } from "../components/utils/UIContext";
//navigace
import { useNavigate, useLocation } from "react-router-dom";
/** Komponenty */
import HorseTeam from "../components/HorseTeam";
import PersonTeam from "../components/PersonTeam";
//data
import horseData from "../data/dataKone";
import personData from "../data/personData";
import { aboutMe } from "../data/aboutMe";

/** Styly */
import "../styles/aboutUs.scss";

const About: React.FC = () => {
  // const { isDarkMode } = useContext(UIContext);
  // const pictureSrc = isDarkMode ? "/img/contactTerapy.jpg" : "/img/Onas.jpg";
  const teamRef = useRef<HTMLDivElement>(null);
  const horseRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  //
  const [isTeamVisible, setIsTeamVisible] = useState(false);
  const [isHorseVisible, setIsHorseVisible] = useState(false);
  const [isGridView, setIsGridView] = useState(() => {
    const savedState = localStorage.getItem("isGridView");
    return savedState ? savedState === "true" : true;
  }); // true = grid-team, false = team-horse-content
  // Synchronizace stavu s URL
  useEffect(() => {
    if (location.pathname === "/about/our-team") {
      setIsTeamVisible(true);
      setIsHorseVisible(false);
      setTimeout(() => {
        if (teamRef.current) {
          const y =
            teamRef.current.getBoundingClientRect().top + window.scrollY - 150;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
    if (location.pathname === "/about/our-horses") {
      setIsHorseVisible(true);
      setIsTeamVisible(false);
      setTimeout(() => {
        if (horseRef.current) {
          const y =
            horseRef.current.getBoundingClientRect().top + window.scrollY - 150;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.pathname]);

  const toggleTeam = () => {
    if (isTeamVisible) {
      setIsTeamVisible(false);
      navigate("/about");
    } else {
      setIsTeamVisible(true);
      setIsHorseVisible(false);
      navigate("/about/our-team");
      setTimeout(() => {
        const el = teamRef.current;
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 150;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
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
      setTimeout(() => {
        const el = horseRef.current;
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 150;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  };

  // Upravíme funkci pro přepínání stylů
  const toggleViewStyle = () => {
    setIsGridView((prevState) => {
      const newState = !prevState;
      // Uložíme nový stav do localStorage
      localStorage.setItem("isGridView", String(newState));
      return newState;
    });
  };

  return (
    <section className="HomeSection" id="Home" tabIndex={0}>
      <div className="aboutUs">
        <div className="GridContainer">
          <div className="Gridphotos">
            {/* <img
              className="pictureOfUs"
              src={pictureSrc}
              alt="Kůň, kterého hladí lidi"
            /> */}
            <div className="backgroundAboutMe1"></div>
            <div className="backgroundAboutMe"></div>
          </div>
          <div className="GridItem">
            <h2>{aboutMe.title}</h2>
            <p>
              {aboutMe.paragraph1} Jsme členy České jezdecké federace{" "}
              <a
                href="https://www.cjf.cz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="SpecialNav">(ČJF)</span>
              </a>
              ,{" "}
              <a
                href="https://www.moravskyponyclub.cz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="SpecialNav">Moravského pony klubu</span>
              </a>{" "}
              a České hiporehabilitační společnosti
              <a
                href="https://hiporehabilitace-cr.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="SpecialNav">(ČHS)</span>
              </a>
              .
            </p>
            <p>{aboutMe.paragraph2}</p>
            <p>{aboutMe.paragraph3}</p>
            <p>
              {aboutMe.paragraph4}
              <a
                href="https://proslepekone.webnode.cz/o-nas/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="SpecialNav">Naděje pro slepé koně, z.s.</span>
              </a>{" "}
              {""}
              {aboutMe.paragraph5}
            </p>
            <p>
              Od roku 2024 se aktivně věnujeme i Hobby Horsingu – jsme členy
              České{" "}
              <a
                href="https://www.chha.cz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="SpecialNav">Hobby Horsing Asociace</span>
              </a>
              , {aboutMe.paragraph6}
            </p>
          </div>
        </div>
        {/* Dynamické zobrazení obsahu */}
        <div className="buttons">
          <button className="btn" onClick={toggleTeam}>
            Náš team
          </button>
          <div className="button-with-label">
            <button className="btn" onClick={toggleViewStyle}>
              {isGridView ? "Kartičky" : "Linky"}
            </button>
            <span className="button-label">Změna vzhledu</span>
          </div>
          <button className="btn" onClick={toggleHorses}>
            Naše koně
          </button>
        </div>

        {/* Upravíme komponenty tak, aby používaly správnou třídu podle stavu */}
        {isTeamVisible && (
          <div className="horse-content-conatiner" ref={teamRef}>
            {personData.map((person, index) => (
              <PersonTeam
                key={index}
                name={person.name}
                text={person.text}
                imgPicture={person.imgPicture}
                isGridView={isGridView}
              />
            ))}
          </div>
        )}

        {isHorseVisible && (
          <div className="horse-content-conatiner" ref={horseRef}>
            {horseData.map((horse, index) => (
              <HorseTeam
                key={index}
                name={horse.name}
                origin={horse.origin}
                born={horse.born}
                breeder={horse.breeder}
                owner={horse.owner}
                description={horse.description}
                imageName={horse.imageName}
                isGridView={isGridView}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
