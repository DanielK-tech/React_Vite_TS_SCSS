import "../styles/footer.scss" 
//komponenty 
import RibbonBorder from "./RibbonBorder";

const Footer: React.FC = () => { 
//     const handleClick = () => {
//     window.location.href = 'https://www.facebook.com/profile.php?id=61557178208916', '_blank';
//   }; 
    const handleClick = () => {
        window.open('https://www.facebook.com/profile.php?id=61557178208916', '_blank');
    };
    return (
        <footer>
            <RibbonBorder fillColor="#e1c671" strokeColor="#b8860b">
                <div className="BankAccount">
                    <p>Transparentní účet</p>
                    <p className="ColorRed">UniCredit Bank</p>
                    <p>
                        <strong>1701279002/2700</strong>{" "}
                    </p>
                </div>
            </RibbonBorder>
            <p>&copy; 2025 SK Blind Guardians, všechna práva vyhrazena</p>
            <i className="fa-brands fa-facebook" onClick={handleClick}></i>
        </footer>
    );
};

export default Footer;
