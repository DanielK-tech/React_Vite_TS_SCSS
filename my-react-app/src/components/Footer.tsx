import React from "react";

const Footer: React.FC = () => { 
//     const handleClick = () => {
//     window.location.href = 'https://www.facebook.com/profile.php?id=61557178208916', '_blank';
//   }; 
    const handleClick = () => {
        window.open('https://www.facebook.com/profile.php?id=61557178208916', '_blank');
    };
    return (   
        <footer>
            
                <p>&copy; 2025 SK Blind Guardians, všechna práva vyhrazena</p>  
                <i className="fa-brands fa-facebook" onClick={handleClick}></i>
        </footer>  
        );
};

export default Footer;
