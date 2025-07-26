import "../styles/PonySchool.scss";
/**Data */
import { ponySchool } from "../data/ponySchool";
// breadcrubms
import Breadcrumb from "../components/BreadCrumb";

const PonySchool: React.FC = () => {
  return (
    <section className=" HomeSection" id="HobyHorsing" tabIndex={0}>
      <div className="ActivityContent schoolBreadcrumb">
        <h2>{ponySchool.title}</h2>
        <Breadcrumb currentPage="Pony školička" />
        <div className="ActivityContentContainer">
          <div className="TextContent">
            <article>
              <p>{ponySchool.paragraph1}</p>
              <p>{ponySchool.paragraph2}</p>
              <p>{ponySchool.paragraph3}</p>
            </article>
          </div>
          <div className="backgroundPicture001"></div>
          <div className="backgroundPicture002"></div>
        </div>
      </div>
    </section>
  );
};

export default PonySchool;
