import { useContext } from "react";
//globální logika
import { UIContext } from "./utils/UIContext";
//komponenta
import MiniMenu from "./MiniMenu";
import NavigationLinks from "./NavigationLinks.tsx";
//styl
import "../styles/header.scss";
/* ikonky */
import "../styles/navPictures.scss";

const logo = "/img/Logo.png";

interface HeaderProps {
  currentPath: string;
}

const Header: React.FC<HeaderProps> = ({ currentPath }) => {
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
        <a
          href="/"
          onClick={scrollToTop}
          aria-current={currentPath === "/" ? "page" : undefined}
        >
          <div className="logo-container">
            <img id="Logo" src={logo} alt="Logo" className="LogoSK" />
          </div>
        </a>
        <div className="hippos">
          <div className="obr1" onClick={Register}>
            <div className="glare"></div>
          </div>
          <div className="obr2" onClick={Hippos}>
            <div className="glare"></div>
          </div>
        </div>
        <NavigationLinks
          currentPath={currentPath}
          getMainLinkClickHandler={() => scrollToTop}
          getActivityItemClickHandler={(item) =>
            item.type === "link" && item.href !== "/foto-galery/"
              ? scrollToTop
              : undefined
          }
          showActivitiesArrow
          showActivitiesImage
          activitiesSubmenuId="activities-submenu"
        />
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
      <MiniMenu
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        scrollToTop={scrollToTop}
        currentPath={currentPath}
      />
    </header>
  );
};

export default Header;
