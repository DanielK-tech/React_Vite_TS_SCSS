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
                <h2>Jméno: {name}</h2> 
                <h3>Plemeno: {origin}</h3> 
                <h3>Narození: {born}</h3> 
                <h3>Chovatel: {breeder}</h3> 
                <h3>Vlastník: {owner}</h3> 
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default HorseTeam