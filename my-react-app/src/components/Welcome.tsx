import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
//Link,

const Header: React.FC = () => {
  // Stav pro režim (Light/Dark)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Přepínání režimu
  const toggleMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.setAttribute("data-theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            {" "}
            <NavLink to="/">Úvod</NavLink>
          </li>
          <li>
            <NavLink to="/about">O mě</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Kontakt</NavLink>
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
      </nav>
      {/* <div className="container" id="content">
        <h2>Nová komponenta</h2>
        <p>Toto je obsah vaší nové komponenty.</p>
      </div> */}
    </header>
  );
};

export default Header;
