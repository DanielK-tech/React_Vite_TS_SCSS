import { useState } from "react";
import React from "react";  
/** Komponenty ** */
import OurService from "./OurServices"; 
import Foto from "./FotoSection";

const Main: React.FC = () => {
    return (
        <section className="HomeSection" id="Home" tabIndex={0}>
            <div className="container">
                <h1>SK Blind Guardians</h1>
                <h3>Hyporehabilitace a aktivity s využitím koní.</h3>
            </div> 
            <OurService />  
            <Foto />
        </section>
    );
};

export default Main;
