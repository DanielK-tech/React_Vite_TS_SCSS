// import { useState } from 'react' 
import React from "react"; 

const Header: React.FC = () => {
    return ( 
      <header> 
        <nav className="navbar"> 
      <ul> 
        <li><a href="#">Úvod</a></li> 
        <li><a href="#">O mě</a></li> 
        <li><a href="#">Kontakt</a></li>
      </ul> 
      <div className="switcher-box">
                    <span className="switcher-description">
                        <p>Light Mode</p>
                         <i className="fa-solid fa-sun"></i> 
                        {/* <i className="fa-solid fa-cloud-moon"></i> */}
                    </span>
                    <label className="switch">                       
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
        </nav>
      <div className="container" id="content">
        <h2>Nová komponenta</h2>
        <p>Toto je obsah vaší nové komponenty.</p>
      </div> 
      </header>
    );
  };
  
  export default Header;