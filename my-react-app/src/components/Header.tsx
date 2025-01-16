import { useState, useEffect } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
//Link, 

//obrázky 
import logo from "./img/Logo.png"; 
import cross from "./img/cross.png";

const Header: React.FC = () => {
    // Stav pro režim (Light/Dark)
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem("theme"); // Získání hodnoty z localStorage
        return savedMode === "dark"; // Nastavení na true, pokud je "dark"
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Stav pro menu

    // Přepínání režimu
    const toggleMode = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            document.body.setAttribute(
                "data-theme",
                newMode ? "dark" : "light"
            );
            // Uložení do localStorage
            localStorage.setItem("theme", newMode ? "dark" : "light");
            return newMode;
        });
    }; 

    // Efekt pro nastavení režimu při načtení stránky
    useEffect(() => {
        const savedMode = localStorage.getItem("theme");
        if (savedMode) {
            document.body.setAttribute("data-theme", savedMode);
        }
    }, []);

    // Funkce pro scrollování nahoru
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Přepnutí zobrazení menu
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header>
            <nav className={`navbar ${isMenuOpen ? "hidden" : ""}`}>
                <NavLink to="/" onClick={scrollToTop}>
                    <img id="Logo" src={logo} alt="Logo" className="LogoSK" />
                </NavLink>
                <ul>
                    <li>
                        {" "}
                        <NavLink to="/" onClick={scrollToTop}>
                            Úvod
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={scrollToTop}>
                            O mě
                        </NavLink>
                    </li> 
                    <li className="Aktivity">                
                           Aktivity 
                           <div className="arrowDown "> 
                           <i className="fa fa-arrow-circle-down" aria-hidden="true"></i>
                            </div>   
                        <ul className="submenu" id="Submenu"> 
                            <li><NavLink to="/hyporehabilitace">*3</NavLink></li> {/* dodělat vlastní komponenty a routy v app */}
                            <li><NavLink to="/hyporehabilitace">*3</NavLink></li>
                            <li><NavLink to="/hyporehabilitace">*3</NavLink></li>
                            <li>*4</li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={scrollToTop}>
                            Kontakt
                        </NavLink>
                    </li>
                </ul>
                <div className="switcher-box">
                    <span className="switcher-description">
                        <p>{isDarkMode ? "Dark Mode" : "Light Mode"}</p>
                        <i
                            className={`fa-solid ${
                                isDarkMode ? "fa-cloud-moon" : "fa-sun"
                            }`}
                        ></i>
                        {/* <i className="fa-solid fa-cloud-moon"></i> */}
                    </span>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={isDarkMode}
                            onChange={toggleMode}
                        />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
            <div
                className="menu-container-mini"
                style={{ display: isMenuOpen ? "block" : "none" }}
            >
                <ul className="menu">
                    <li>
                        <NavLink to="/" onClick={scrollToTop}>
                            Úvod
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={scrollToTop}>
                            O mě
                        </NavLink>
                    </li> 
                    <li className="Aktivity">
                          {/* přidat vyjíždějící menu */}
                            Aktivity 
                            <ul className="submenu" id="Submenu"> 
                            <li><NavLink to="/hyporehabilitace">*3</NavLink></li> {/* dodělat vlastní komponenty a routy v app */}
                            <li><NavLink to="/hyporehabilitace">*3</NavLink></li>
                            <li><NavLink to="/hyporehabilitace">*3</NavLink></li>
                            <li>*4</li>
                        </ul>
                        
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            onClick={scrollToTop}
                            
                        >
                            Kontakt
                        </NavLink>
                    </li>
                </ul>
                <img
                    src={cross}
                    alt="křížek"
                    className="cross"
                    onClick={toggleMenu}
                />
            </div>
        </header>
    );
};

export default Header;
