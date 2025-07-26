import React, { useState, useEffect } from "react";
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
import Picture from "/img/Onas.jpg";

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
        <img
          className="pictureOfUs"
          src={Picture}
          alt="Kůň, kterého hladí lidi"
        />
        <h2>O nás</h2>
        <p>
          {aboutMe.paragraph1} Jsme členy České jezdecké federace{" "}
          <a
            href="https://www.cjf.cz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="SpecialNav">(ČJF)</span>
          </a>
          , Moravského pony klubu a České hiporehabilitační společnosti
          <a
            href="https://www.moravskyponyclub.cz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="SpecialNav">(ČHS)</span>
          </a>
          .
        </p>
        <p>{aboutMe.paragraph2}</p>
        <p>{aboutMe.paragraph3}</p>
        <p>{aboutMe.paragraph4}</p>
        <p>
          Od roku 2024 se aktivně věnujeme i Hobby Horsingu – jsme členy České{" "}
          <a href="https://www.chha.cz/" target="_blank" rel="noopener noreferrer">
            <span className="SpecialNav">Hobby Horsing Asociace</span>
          </a>
          , {aboutMe.paragraph5}
        </p>
        {/* Dynamické zobrazení obsahu */}
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
            {personData.map((person, index) => (
              <PersonTeam
                key={index}
                name={person.name}
                text={person.text}
                imgPicture={person.imgPicture}
              />
            ))}
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
                imageName={horse.imageName}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
