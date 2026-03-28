import "../styles/HipoSocial.scss";
/**data */
import { hipoSocial } from "../data/hipoSocial";
// breadcrubms
import Breadcrumb from "../components/BreadCrumb";

const HipoSocial: React.FC = () => {
  return (
    <section className=" HomeSection" id="HobyHorsing" tabIndex={0}>
      <div className="ActivityContent socilaBreadcrumb">
        <h2>{hipoSocial.title}</h2>
        <Breadcrumb currentPage="Pedagogická a sociální praxe" />
        <div className="ActivityContentContainer">
          <div className="TextContent">
            <article>
              <p>{hipoSocial.paragraph1}</p>
              <p>
                Naše certifikovaná instruktorka{" "}
                <a href="/about/our-team/#team-section">
                  <span className="SpecialNav">Bc. Eva Kolegarová, DiS</span>
                </a>{" "}
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
