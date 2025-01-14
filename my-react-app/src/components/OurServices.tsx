import React from "react"; 
import { NavLink } from "react-router-dom";

const OurService: React.FC = () => {
    // Funkce pro scrollování nahoru
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="HomeSection" id="Service" tabIndex={0}>
            <div className="container"> 
                <div className="Servicesis"> 
                <h4 className="Services">Chcete využít našich služeb?</h4>
                <p>Napiště nebo zavolejte</p>
                <button className="btn">
                    <NavLink to="/contact" onClick={scrollToTop}>
                        Kontakt
                    </NavLink>
                </button>
                </div>
            </div>
        </section>
    );
};

export default OurService;
