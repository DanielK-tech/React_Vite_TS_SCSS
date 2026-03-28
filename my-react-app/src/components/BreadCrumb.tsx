import { useState } from "react";
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
          onClick={toggleDropdown}
          aria-label="Zobrazit další aktivity"
        >
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </button>

        {isDropdownOpen && (
          <ul className="breadcrumb-dropdown">
            <li>
              <a href="/foto-galery/">
                <i className="fa-solid fa-photo-film"></i>Fotogalerie
              </a>
            </li>
            <li>
              <a href="/hobby-horsing/">
                <i className="fa-solid fa-horse-head"></i>Hobby horsing
              </a>
            </li>
            <li>
              <a href="/jezdecky-klub/">
                <i className="fa-solid fa-horse"></i>Jezdecký klub
              </a>
            </li>
            <li>
              <a href="/pony-skolicka/">
                <i className="fa-solid fa-school-flag"></i>Pony školička
              </a>
            </li>
            <li>
              <a href="/hiporehabilitace-praxe/">
                <i className="fa-solid fa-house-user"></i>Hiporehabilitace v
                pedagogické a sociální praxi
              </a>
            </li>
            <li>
              <a href="/hyporehabilitace-kontakt/">
                <i className="fa-solid fa-house-medical"></i>Hiporehabilitace v
                kontaktní terapii
              </a>
            </li>
            <li>
              <a href="/para-jezdectvi/">
                <i className="fa-solid fa-wheelchair-move"></i>Parajezdectví
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Breadcrumb;
