import React, { useState, useEffect,  } from "react";
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
