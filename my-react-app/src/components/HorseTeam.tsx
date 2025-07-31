import "../styles/horseTeam.scss";
//globální logika
import { getImageUrl } from "./utils/getImageUrl";

interface HorseProps {
  name: string;
  origin: string;
  born: string;
  breeder: string;
  owner: string;
  description: string;
  imageName: string;
  isGridView?: boolean; // Přidáme volitelný prop
}

const HorseTeam: React.FC<HorseProps> = ({
  name,
  origin,
  born,
  breeder,
  owner,
  description,
  imageName,
  isGridView = true, // Výchozí hodnota
}) => {
  const backgroundImageUrl = getImageUrl("horseImg", imageName);

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
            <div className="info-text">
              <h2>{name}</h2>
              <h3>
                <span className="backgroudnder">Plemeno:</span> {origin}
              </h3>
              <h3>
                <span className="backgroudnder">Narození:</span> {born}
              </h3>
              <h3>
                <span className="backgroudnder">Chovatel:</span> {breeder}
              </h3>
              <h3>
                <span className="backgroudnder">Vlastník:</span> {owner}
              </h3>
            </div>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HorseTeam;
