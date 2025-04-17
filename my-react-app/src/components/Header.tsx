import { useContext } from "react";
import { NavLink } from "react-router-dom";
//globální logika
import { UIContext } from "./utils/UIContext";
//styl
import "../styles/header.scss";
/* ikonky */
import "../styles/navPictures.scss";
//obrázky
import logo from "/img/Logo.png";
import cross from "/img/cross.png";
import indianHorse from "/img/indianHorse.png";

const Header: React.FC = () => {
  const {
    isDarkMode,
    toggleMode,
    isMenuOpen,
    toggleMenu,
    isScrolled,
    scrollToTop,
    Hippos,
    Register,
  } = useContext(UIContext);

  return (
    <header>
      <div className={`navPicture ${isScrolled ? "scrolled" : ""}`}></div>
      <nav
        className={`navbar ${isMenuOpen ? "hidden" : ""} ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <NavLink to="/" onClick={scrollToTop}>
          <div className="logo-container">
            <img id="Logo" src={logo} alt="Logo" className="LogoSK" />
          </div>
        </NavLink>
        <div className="hippos">
          <div className="obr1" onClick={Register}>
            <div className="glare"></div>
          </div>
          <div className="obr2" onClick={Hippos}>
            <div className="glare"></div>
          </div>
        </div>
        <ul>
          <li>
            {" "}
            <NavLink to="/" onClick={scrollToTop}>
              Úvod
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={scrollToTop}>
              O nás
            </NavLink>
          </li>
          <li className="Aktivity">
            <a href="#">Aktivity </a>
            <div className="arrowDown ">
              <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
            <ul className="submenu" id="Submenu">
              <img className="IndianHorse" src={indianHorse} alt="" />
              <li>
                <NavLink to="/foto-galery">
                  <i className="fa-solid fa-photo-film"></i>Fotogalerie
                </NavLink>
              </li>{" "}
              {/* dodělat vlastní komponenty a routy v app */}
              <li>
                <NavLink to="/hobby-horsing">
                  <i className="fa-solid fa-horse-head"></i>Hobby horsing
                </NavLink>
              </li>
              <li>
                <NavLink to="/jezdecky-klub">
                  <i className="fa-solid fa-horse"></i>Jezdecký klub
                </NavLink>
              </li>
              <li>
                <NavLink to="/pony-skolicka">
                  <i className="fa-solid fa-school-flag"></i>Pony školička{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/hiporehabilitace-praxe">
                  <i className="fa-solid fa-house-user"></i>Hiporehabilitace v
                  pedagogickéa sociální praxi{" "}
                </NavLink>
              </li>
              <li>
                <NavLink to="/hyporehabilitace-kontakt">
                  <i className="fa-solid fa-house-medical"></i>Hiporehabilitace
                  v kontaktní terapii
                </NavLink>
              </li>
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
              className={`fa-solid ${isDarkMode ? "fa-cloud-moon" : "fa-sun"}`}
            ></i>
            {/* <i className="fa-solid fa-cloud-moon"></i> */}
          </span>
          <label className="switch">
            <input type="checkbox" checked={isDarkMode} onChange={toggleMode} />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </nav>
      {/* Mini menu */}
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
              O nás
            </NavLink>
          </li>
          <li className="Aktivity">
            {/* přidat vyjíždějící menu */}
            <a href="#">Aktivity </a>
            <div className="submenuContainer">
              <ul className="submenu miniMenu" id="Submenu">
                <li>
                  <NavLink to="/foto-galery">
                    <i className="fa-solid fa-photo-film"></i>Fotogalerie
                  </NavLink>
                </li>{" "}
                {/* dodělat vlastní komponenty a routy v app */}
                <li>
                  <NavLink to="/hobby-horsing/">
                    <i className="fa-solid fa-horse-head"></i>Hobby horsing
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/jezdecky-klub">
                    <i className="fa-solid fa-horse"></i>Jezdecký klub
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/pony-skolicka">
                    <i className="fa-solid fa-school-flag"></i>Pony školička{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hiporehabilitace-praxe">
                    <i className="fa-solid fa-house-user"></i>Hiporehabilitace v
                    pedagogickéa sociální praxi{" "}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/hyporehabilitace-kontakt">
                    <i className="fa-solid fa-house-medical"></i>
                    Hiporehabilitace v kontaktní terapii
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <NavLink to="/contact" onClick={scrollToTop}>
              Kontakt
            </NavLink>
          </li>
        </ul>
        <img src={cross} alt="křížek" className="cross" onClick={toggleMenu} />
      </div>
    </header>
  );
};

export default Header;
