import { useState } from "react";
import React from "react"; 
import OurService from "./OurServices";

const Main: React.FC = () => {
    return (
        <section className="HomeSection" id="Home" tabIndex={0}>
            <div className="container">
                <h1>SK Blind Guardians</h1>
                <h3>Hyporehabilitace a aktivity s využitím koní.</h3>
            </div> 
            <OurService />
        </section>
    );
};

export default Main;
