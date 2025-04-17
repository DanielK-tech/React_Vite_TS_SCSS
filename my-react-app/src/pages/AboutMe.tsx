import React, { useState, useEffect } from "react";
//navigace
import { useNavigate, useLocation } from "react-router-dom";
/** Komponenty */
import HorseTeam from "../components/HorseTeam";
import PersonTeam from "../components/PersonTeam";
//data
import horseData from "../data/dataKone";
import personData from "../data/personData";

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
                    Jsme malá stáj rodinného typu na severní Moravě. V roce 2024
                    jsme založili spolek zaměřený na volnočasové jezdecké
                    aktivity pro děti a mládež především z blízkého okolí a
                    začali se angažovat v hiporehabilitačních aktivitách, které
                    nabízíme i široké veřejnosti. Jsme členy České jezdecké
                    federace (ČJF), Moravského pony klubu a České
                    hiporehabilitační společnosti (ČHS).
                </p>
                <p>
                    Členové našeho týmu se hiporehabilitačním aktivitám věnují
                    již od roku 2009, v roce založení spolku se nám proto
                    povedlo získat status Registrovaného střediska ČHS a
                    certifikát pro hiporehabilitaci v pedagogické a sociální
                    praxi.
                </p>
                <p>
                    Aktivity našich členů jsou již dlouhodobě spjaty i s péčí a
                    výcvikem různě zrakově znevýhodněných koní. Od roku 2023
                    jsme v přátelském kontaktu s neziskovkou Naděje pro slepé
                    koně, z.s., se kterou jsme proto od našeho založení navázali
                    úzkou spolupráci a nabízíme v tomto směru pomoc a
                    poradenství majitelům především zde na severovýchodě
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
