import { NavLink } from "react-router-dom";
import Breadcrumb from "../components/BreadCrumb";
/** Data */
import { hobbyHorsing } from "../data/hobbyHorsing";
/** Styl */
import "../styles/HobyHorsing.scss";

//vytvoř speciální třídu scss na text v aktivity co bude společná + struktura jako tady a obrázek
const HobyHorsing: React.FC = () => {
  const handleScroll = () => {
    window.scrollBy({ top: 560, behavior: "smooth" }); // 10rem = 160px
  };
  return (
    <section className=" HomeSection" id="HobyHorsing" tabIndex={0}>
      <div className="ActivityContent">
        <h2>{hobbyHorsing.title}</h2>
        <Breadcrumb currentPage="Hobby horsing" />
        <div className="ActivityContentContainer">
          <div className="TextContent">
            <article>
              <p>
                {hobbyHorsing.paragraph1}
              </p>
              <p>
                {hobbyHorsing.paragraph2}
              </p>
              <p>
                Náš klub je členem České {""}
                <a
                  href="https://www.chha.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="SpecialNav">Hobby Horsing Asociace</span>
                </a>
                , pravidlené tréninky vede{" "}
                <NavLink to="/about/our-team" onClick={handleScroll}>
                  <span className="SpecialNav">Bc. Jana Pospíšilová</span>
                </NavLink>{" "}
                , která je od roku 2024 také certifikovaným rozhodčím ČHHA pro
                disciplíny drezura, parkur a skok mohutnosti.
              </p>
            </article>
          </div>
          <div className="backgroundPicture"></div>
          <div className="backgroundPicture2"></div>
        </div>
      </div>
    </section>
  );
};

export default HobyHorsing;
