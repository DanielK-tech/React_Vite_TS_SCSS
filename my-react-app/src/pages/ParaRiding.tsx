import "../styles/paraRiding.scss";
/**Data */
import paraRiding from "../data/paraRiding";
// breadcrubms
import Breadcrumb from "../components/BreadCrumb";

const HorseClub: React.FC = () => {
  return (
    <section className=" HomeSection" id="HobyHorsing" tabIndex={0}>
      <div className="ActivityContent GridContent clubBreadcrumb">
        <h2>{paraRiding.title}</h2>
        <Breadcrumb currentPage="Parajezdectví" />
        <div className="GridContainer">
          <div className=" GridItem">
            <article>
              <p>{paraRiding.paragraph1}</p>
              <p>{paraRiding.paragraph2}</p>
              <p>{paraRiding.paragraph3}</p>
              <p>
                {paraRiding.paragraph4}{" "}
                <a
                  href="https://hiporehabilitace-cr.com/hiporehabilitace/pro-odborniky/htfe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="SpecialNav">(HTFE.)</span>
                </a>{" "}
                {paraRiding.paragraph5}
                <a
                  href="https://hiporehabilitace-cr.com/hiporehabilitace/pro-odborniky/hpsp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="SpecialNav">(HPSP)</span>
                </a>{" "}
                {paraRiding.paragraph6}{" "}
                <a
                  href="https://hiporehabilitace-cr.com/hiporehabilitace/pro-odborniky/htp/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="SpecialNav">(HTP).</span>
                </a>{" "}
                {paraRiding.paragraph7}
              </p>
              <p>
                {paraRiding.paragraph8}
                <a
                  href="https://www.cjf.cz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="SpecialNav">ČJF,</span>
                </a>{" "}
                {paraRiding.paragraph9}
              </p>
              <p>{paraRiding.paragraph10}</p>
            </article>
          </div>
          <div className="backgroundParaPicture01 Gridphoto"></div>
          <div className="backgroundParaPicture02 Gridphoto"></div>
          <div className="backgroundParaPicture03 Gridphoto"></div>
        </div>
      </div>
    </section>
  );
};

export default HorseClub;
