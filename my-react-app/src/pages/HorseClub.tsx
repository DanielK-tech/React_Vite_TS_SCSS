import "../styles/HorseClub.scss";
/**Data */
import { horseClub } from "../data/horseClub";
// breadcrubms
import Breadcrumb from "../components/BreadCrumb";

const HorseClub: React.FC = () => {
  return (
    <section className=" HomeSection" id="HobyHorsing" tabIndex={0}>
      <div className="ActivityContent clubBreadcrumb">
        <h2>{horseClub.title}</h2>
        <Breadcrumb currentPage="jezdecký klub" />
        <div className="ActivityContentContainer">
          <div className="TextContent">
            <article>
              <p>{horseClub.paragraph1}</p>
              <p>{horseClub.paragraph2}</p>
              <p>{horseClub.paragraph3}</p>
            </article>
          </div>
          <div className="backgroundPicture01"></div>
          <div className="backgroundPicture02"></div>
        </div>
      </div>
    </section>
  );
};

export default HorseClub;
