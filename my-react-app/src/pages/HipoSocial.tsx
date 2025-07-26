import "../styles/HipoSocial.scss";
import { NavLink } from "react-router-dom";
/**data */
import { hipoSocial } from "../data/hipoSocial";
// breadcrubms
import Breadcrumb from "../components/BreadCrumb";

const HipoSocial: React.FC = () => {
  const handleScroll = () => {
    window.scrollBy({ top: 560, behavior: "smooth" }); // 10rem = 160px
  };
  return (
    <section className=" HomeSection" id="HobyHorsing" tabIndex={0}>
      <div className="ActivityContent socilaBreadcrumb">
        <h2>Hiporehabilitace v pedagogické a sociální praxi</h2>
        <Breadcrumb currentPage="Pedagogická a sociální praxe" />
        <div className="ActivityContentContainer">
          <div className="TextContent">
            <article>
              <p>{hipoSocial.paragraph1}</p>
              <p>
                Naše certifikovaná instruktorka{" "}
                <NavLink to="/about/our-team" onClick={handleScroll}>
                  <span className="SpecialNav">Bc. Eva Kolegarová, DiS</span>
                </NavLink>{" "}
                {hipoSocial.paragraph2}
              </p>
              <p>{hipoSocial.paragraph3}</p>
            </article>
          </div>
          <div className="backgroundPicture0001"></div>
          <div className="backgroundPicture0002"></div>
        </div>
      </div>
    </section>
  );
};

export default HipoSocial;
