import "./Horseteam.scss";
/**Vite trick na dynamické načtení URL obrázků */
const images = import.meta.glob("../horseImg/*.jpg", { eager: true }) as {
  [key: string]: { default: string };
};

// Funkce, která na základě jména souboru (např. "Azazela005.jpg")
// vyhledá správnou URL v objektu images.
const getImageUrl = (fileName: string): string => {
  const imageKey = Object.keys(images).find((key) => key.endsWith(fileName));
  return imageKey ? images[imageKey].default : "";
};

interface HorseProps {
  name: string;
  origin: string;
  born: string;
  breeder: string;
  owner: string;
  description: string;
  imageName: string;
}

const HorseTeam: React.FC<HorseProps> = ({
  name,
  origin,
  born,
  breeder,
  owner,
  description,
  imageName,
}) => {
  const backgroundImageUrl = getImageUrl(imageName);
  return (
    <div className="team-horse-content">
      <div className="showcase">
        <span className="squareSpaner"></span>
        <div className="contente">
          <div
            className="Horse"
            style={{
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <h2>{name}</h2>
          <h3>
            {" "}
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
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HorseTeam;
