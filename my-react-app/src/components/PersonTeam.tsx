import "../styles/personTeam.scss";
import { getImageUrl } from "./utils/getImageUrl";

interface PersonProps {
  name: string;
  text: string;
  imgPicture: string;
}

const PersonTeam: React.FC<PersonProps> = ({ name, text, imgPicture }) => {
  const backgroundImageUrl = getImageUrl("teamImg", imgPicture);
  return (
    <div className="contact">
      <span className="squareSpan"></span>
      <div className="content">
        <div
          className="face worker"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <h3>{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default PersonTeam;
