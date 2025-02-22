import { NavLink } from "react-router-dom";
import "./OurService.scss";
const OurService: React.FC = () => {
  // Funkce pro scrollování nahoru
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const text: string = "Chcete využít našich služeb?";
  return (
    <section className="HomeSection marginer" id="Service" tabIndex={0}>
      <div className="container">
        <div className="Servicesis ">
          <div className="subContainer">
            <div className="PictureLeft"></div>
            <div className="PictureRight"></div>
            <h4 className="Services">
              {text.split("").map((char, index) => (
                <span
                  key={index}
                  className="letter"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {char}
                </span>
              ))}
            </h4>
            <p>Napiště nebo zavolejte</p>
            <button className="btn">
              <NavLink to="/contact" onClick={scrollToTop}>
                Kontakt
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
