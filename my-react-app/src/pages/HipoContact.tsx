import "../styles//HipoContact.scss";
/** data */
import hipoContact from "../data/hipoContact";
// breadcrubms
import Breadcrumb from "../components/BreadCrumb";

const HipoContact: React.FC = () => {
  return (
    <section className=" HomeSection" id="HobyHorsing" tabIndex={0}>
      <div className="ActivityContent contactBreadcrumb">
        <h2>{hipoContact.title}</h2>
        <Breadcrumb currentPage="Kontaktní praxe" />
        <div className="ActivityContentContainer">
          <div className="TextContent">
            <article>
              <p>
               {hipoContact.paragraph1}
              </p>
              <p>
                {hipoContact.paragraph2}
              </p>
              <p>
               {hipoContact.paragraph3}
              </p>
            </article>
          </div>
          <div className="backgroundPicture010"></div>
          <div className="backgroundPicture020"></div>
        </div>
      </div>
    </section>
  );
};

export default HipoContact;
