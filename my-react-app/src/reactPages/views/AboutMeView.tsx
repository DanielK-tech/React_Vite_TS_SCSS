import React, { useState, useEffect, useRef } from "react";
// import { UIContext } from "../components/utils/UIContext";
/** Komponenty */
import HorseTeam from "../../components/HorseTeam";
import PersonTeam from "../../components/PersonTeam";
//data
import horseData from "../../data/dataKone";
import personData from "../../data/personData";
import { aboutMe } from "../../data/aboutMe";
import type { AboutSection } from "../../data/site";

/** Styly */
import "../../styles/aboutUs.scss";

interface AboutProps {
  initialSection?: AboutSection;
}

const getSectionFromPath = (pathname: string): AboutSection => {
  if (pathname.startsWith("/about/our-team")) {
    return "team";
  }

  if (pathname.startsWith("/about/our-horses")) {
    return "horses";
  }

  return "overview";
};

const About: React.FC<AboutProps> = ({ initialSection = "overview" }) => {
  // const { isDarkMode } = useContext(UIContext);
  // const pictureSrc = isDarkMode ? "/img/contactTerapy.jpg" : "/img/Onas.jpg";
  const teamRef = useRef<HTMLDivElement>(null);
  const horseRef = useRef<HTMLDivElement>(null);
  //
  const [activeSection, setActiveSection] =
    useState<AboutSection>(initialSection);
  const [isGridView, setIsGridView] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    const savedState = window.localStorage.getItem("isGridView");
    return savedState ? savedState === "true" : true;
  }); // true = grid-team, false = team-horse-content

  const syncUrl = (section: AboutSection) => {
    if (typeof window === "undefined") {
      return;
    }

    const nextUrl =
      section === "team"
        ? "/about/our-team/#team-section"
        : section === "horses"
          ? "/about/our-horses/#horse-section"
          : "/about/";

    window.history.pushState({}, "", nextUrl);
  };

  const scrollToSection = (section: AboutSection) => {
    const targetRef = section === "team" ? teamRef : horseRef;
    const target = targetRef.current;

    if (!target || typeof window === "undefined") {
      return;
    }

    const y = target.getBoundingClientRect().top + window.scrollY - 150;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    setActiveSection(initialSection);
  }, [initialSection]);

  useEffect(() => {
    if (activeSection === "team" || activeSection === "horses") {
      const timer = window.setTimeout(() => {
        scrollToSection(activeSection);
      }, 100);

      return () => window.clearTimeout(timer);
    }

    return undefined;
  }, [activeSection]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const handlePopState = () => {
      setActiveSection(getSectionFromPath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const toggleTeam = () => {
    setActiveSection((previousSection) => {
      const nextSection = previousSection === "team" ? "overview" : "team";
      syncUrl(nextSection);
      return nextSection;
    });
  };

  const toggleHorses = () => {
    setActiveSection((previousSection) => {
      const nextSection = previousSection === "horses" ? "overview" : "horses";
      syncUrl(nextSection);
      return nextSection;
    });
  };

  // Upravíme funkci pro přepínání stylů
  const toggleViewStyle = () => {
    setIsGridView((prevState) => {
      const newState = !prevState;
      // Uložíme nový stav do localStorage
      if (typeof window !== "undefined") {
        window.localStorage.setItem("isGridView", String(newState));
      }
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
        {activeSection === "team" && (
          <div
            className="horse-content-conatiner"
            id="team-section"
            ref={teamRef}
          >
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

        {activeSection === "horses" && (
          <div
            className="horse-content-conatiner"
            id="horse-section"
            ref={horseRef}
          >
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
