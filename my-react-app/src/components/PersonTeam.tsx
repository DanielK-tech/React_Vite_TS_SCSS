import "../styles/personTeam.scss";
import { getImageUrl } from "./utils/getImageUrl";

interface PersonProps {
  name: string;
  text: string;
  imgPicture: string;
  isGridView?: boolean; // Přidáme volitelný prop
}

const PersonTeam: React.FC<PersonProps> = ({
  name,
  text,
  imgPicture,
  isGridView = false, // Výchozí hodnota
}) => {
  const backgroundImageUrl = getImageUrl("teamImg", imgPicture);

  // Určíme třídu podle propu
  const containerClass = isGridView ? "grid-team" : "team-horse-content";

  return (
    <div className={containerClass}>
      <div className="showcase">
        <div className="contente">
          <div
            className="Horse"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="info">
            <h2>{name}</h2>
          </div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonTeam;
