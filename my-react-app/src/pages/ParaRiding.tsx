import "../styles/paraRiding.scss";
/**Data */
import paraRiding from "../data/paraRiding";
// breadcrubms
import Breadcrumb from "../components/BreadCrumb";

const HorseClub: React.FC = () => {
  return (
    <section className=" HomeSection" id="HobyHorsing" tabIndex={0}>
      <div className="ActivityContent clubBreadcrumb">
        <h2>{paraRiding.title}</h2>
        <Breadcrumb currentPage="Parajezdectví" />
        <div className="ActivityContentContainer">
          <div className="TextContent">
            <article>
              <p>{paraRiding.paragraph1}</p>
              <p>{paraRiding.paragraph2}</p>
              <p>{paraRiding.paragraph3}</p>
              <p>{paraRiding.paragraph4}</p>
              <p>{paraRiding.paragraph5}</p>
              <p>{paraRiding.paragraph6}</p>
            </article>
          </div>
          <div className="backgroundParaPicture01"></div>
          <div className="backgroundParaPicture02"></div>
        </div>
      </div>
    </section>
  );
};

export default HorseClub;
