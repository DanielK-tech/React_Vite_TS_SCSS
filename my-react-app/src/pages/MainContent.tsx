import React from "react";
/** Komponenty ** */
/**data */
import { mainContent } from "../data/mainContent";

/** Styl */
import "../styles/mainContext.scss";

const Main: React.FC = () => {
  return (
    <section className="HomeSection" id="Home" tabIndex={0}>
      <div className="container">
        <div className="mainText">
          <h1>{mainContent.title}</h1>
          <p>{mainContent.description}</p>
          <p>
            {mainContent.paragraph1}
          </p>
        </div>
        <img
          className="MainPicture"
          src={mainContent.image}
          alt="Rodina se dvěma koníky"
        />
      </div>
    </section>
  );
};

export default Main;
