import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/breadCrumb.scss";

interface BreadcrumbProps {
  currentPage: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ currentPage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="breadcrumb-navigation">
      <h4 className="breadcrumb-item">Aktivity</h4>
      <span className="breadcrumb-separator">/</span>
      <div className="breadcrumb-current">
        <span>{currentPage}</span>
        <button
          className="breadcrumb-dropdown-btn"
          onPointerUp={toggleDropdown}
          aria-label="Zobrazit další aktivity"
        >
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </button>

        {isDropdownOpen && (
          <ul className="breadcrumb-dropdown">
            <li>
              <NavLink to="/foto-galery">
                <i className="fa-solid fa-photo-film"></i>Fotogalerie
              </NavLink>
            </li>
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
                <i className="fa-solid fa-school-flag"></i>Pony školička
              </NavLink>
            </li>
            <li>
              <NavLink to="/hiporehabilitace-praxe">
                <i className="fa-solid fa-house-user"></i>Hiporehabilitace v
                pedagogické a sociální praxi
              </NavLink>
            </li>
            <li>
              <NavLink to="/hyporehabilitace-kontakt">
                <i className="fa-solid fa-house-medical"></i>Hiporehabilitace v
                kontaktní terapii
              </NavLink>
            </li>
            <li>
              <NavLink to="/para-jezdectvi">
                <i className="fa-solid fa-wheelchair-move"></i>Parajezdectví
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Breadcrumb;
