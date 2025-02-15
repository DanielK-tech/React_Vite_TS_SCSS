import { NavLink } from "react-router-dom";
import "./OurService.scss";
const OurService: React.FC = () => {
  // Funkce pro scrollování nahoru
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="HomeSection marginer" id="Service" tabIndex={0}>
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
