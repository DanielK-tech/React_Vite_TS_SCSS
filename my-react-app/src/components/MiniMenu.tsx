import { NavLink } from "react-router-dom";
import cross from "/img/cross.png";

interface MiniMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  scrollToTop: () => void;
}

const MiniMenu: React.FC<MiniMenuProps> = ({
  isMenuOpen,
  toggleMenu,
  scrollToTop,
}) => (
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
        <a href="#">Aktivity </a>
        <div className="submenuContainer">
          <ul className="submenu miniMenu" id="Submenu">
            <li>
              <NavLink to="/foto-galery" onClick={toggleMenu}>
                <i className="fa-solid fa-photo-film"></i>Fotogalerie
              </NavLink>
            </li>
            <li>
              <NavLink to="/hobby-horsing/" onClick={toggleMenu}>
                <i className="fa-solid fa-horse-head"></i>Hobby horsing
              </NavLink>
            </li>
            <li>
              <NavLink to="/jezdecky-klub" onClick={toggleMenu}>
                <i className="fa-solid fa-horse"></i>Jezdecký klub
              </NavLink>
            </li>
            <li>
              <NavLink to="/pony-skolicka" onClick={toggleMenu}>
                <i className="fa-solid fa-school-flag"></i>Pony školička
              </NavLink>
            </li>
            <li>
              <NavLink to="/hiporehabilitace-praxe" onClick={toggleMenu}>
                <i className="fa-solid fa-house-user"></i>Hiporehabilitace v
                pedagogickéa sociální praxi
              </NavLink>
            </li>
            <li>
              <NavLink to="/hyporehabilitace-kontakt" onClick={toggleMenu}>
                <i className="fa-solid fa-house-medical"></i>Hiporehabilitace v
                kontaktní terapii
              </NavLink>
            </li>
            <li>
              <NavLink to="/para-jezdectvi" onClick={toggleMenu}>
                <i className="fa-solid fa-wheelchair-move"></i>Parajezdectví
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
);

export default MiniMenu;
