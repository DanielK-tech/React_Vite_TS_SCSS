import "./PersonTeam.scss";

interface PersonProps { 
    name: string;
    text: string;
}

const PersonTeam: React.FC<PersonProps> = ({name, text}) => {
  return (
    <div className="contact">
    <span className="squareSpan"></span>
    <div className="content">
      <div className="face worker"></div>
      <h3>{name} </h3>
      <p>
        {text}
      </p>
    </div>
  </div>
  )
}

export default PersonTeam