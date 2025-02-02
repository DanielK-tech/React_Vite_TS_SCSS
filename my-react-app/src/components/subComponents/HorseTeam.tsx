import "./Horseteam.scss"; 

interface HorseProps {
  name: string;
  origin: string;
  born: string;
  breeder: string;
  owner: string;
  description: string;
}


const HorseTeam: React.FC<HorseProps> = ({name, origin, born, breeder, owner, description}) => {
  return (
    <div className="team-horse-content">
        <div className="showcase"> 
            <span className="squareSpaner"></span>
            <div className="contente"> 
                <div className="Horse"></div> 
                <h2>{name}</h2> 
                <h3> <span className="backgroudnder">Plemeno:</span> {origin}</h3> 
                <h3><span className="backgroudnder">Narození:</span> {born}</h3> 
                <h3><span className="backgroudnder">Chovatel:</span> {breeder}</h3> 
                <h3><span className="backgroudnder">Vlastník:</span> {owner}</h3> 
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default HorseTeam