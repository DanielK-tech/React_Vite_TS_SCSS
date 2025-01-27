import { useState } from "react";
import React from "react";  
/** Komponenty ** */
import OurService from "./OurServices"; 
import Foto from "./FotoSection";

const Main: React.FC = () => {
    return (
        <section className="HomeSection" id="Home" tabIndex={0}>
            <div className="container">
                <h1>
                    Vítejte na stránkách spolku SK Blind Guardians - stáj
                    Leskovec, z.s.
                </h1>
                <p>
                    Jsme nezisková organizace zaměřená především na jezdecké
                    aktivity s dětmi a mládeží a hiporehabilitační aktivity v
                    pedagogické a sociální praxi a v kontaktních terapiích.
                </p>
                <p>S dětmi se sportovně věnujeme i hobby horsingu.</p>
                <p>
                    Naší specialitou je osvěta ve výcviku a jezdeckém využití
                    zrakově znevýhodněných koní a poníků.
                </p>
            </div>
            <OurService />
            <Foto />
        </section>
    );
};

export default Main;
