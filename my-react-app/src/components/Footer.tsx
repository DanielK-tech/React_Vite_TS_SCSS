import "../styles/footer.scss";
import HorseShoe from "../../src/horseshoe-svgrepo-com.svg";
//komponenty
// import RibbonBorder from "./RibbonBorder";

const Footer: React.FC = () => {
  //     const handleClick = () => {
  //     window.location.href = 'https://www.facebook.com/profile.php?id=61557178208916', '_blank';
  //   };
  const handleClick = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61557178208916",
      "_blank"
    );
  };
  return (
    <footer>
      <div className="BankAccount">
        <img src={HorseShoe} alt="Horseshoe" className="horseshoe" />
        <p>Transparentní účet</p>
        <p className="ColorRed">UniCredit Bank</p>
        <p>
          <strong>1701279002/2700</strong>{" "}
        </p>
      </div>

      <p>&copy; 2025 SK Blind Guardians, všechna práva vyhrazena</p>
      <i className="fa-brands fa-facebook" onClick={handleClick}></i>
    </footer>
  );
};

export default Footer;
