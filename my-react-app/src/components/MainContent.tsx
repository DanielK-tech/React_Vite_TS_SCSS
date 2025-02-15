
import React from "react";  
/** Komponenty ** */
import Mainpicture from "./img/showFoto.jpg";

/** Styl */ 
import "./MainContext.scss";

const Main: React.FC = () => {
    return (
        <section className="HomeSection" id="Home" tabIndex={0}>
            <div className="container"> 
                <div className="mainText"> 
                <h1>
                    Vítejte na stránkách spolku SK Blind Guardians - stáj
                    Leskovec, z.s.
                </h1>
                <p>
                    Jsme nezisková organizace zaměřená především na jezdecké
                    aktivity s dětmi a mládeží a hiporehabilitační aktivity v
                    pedagogické a sociální praxi a v kontaktních terapiích. <br />
                S dětmi se sportovně věnujeme i hobby horsingu.                
                    Naší specialitou je osvěta ve výcviku a jezdeckém využití
                    zrakově znevýhodněných koní a poníků.
                </p>
                
                </div> 
                <img className="MainPicture" src={Mainpicture} alt="Rodina se dvěma koníky" />
            </div>
          
        </section>
    );
};

export default Main;
