import React from "react";  
/** Obrázky ****/ 
import Horse1 from "./img/Horse1.jpg";
import Horse2 from "./img/Horse2.jpg";
import Horse3 from "./img/Horse3.jpg";
import Horse4 from "./img/Horse4.jpg";
import Horse5 from "./img/Horse5.jpg";
import Horse6 from "./img/Horse6.jpg";
import Horse7 from "./img/Horse7.jpg";
import Horse8 from "./img/Horse8.jpg";
import Horse9 from "./img/Horse9.jpg";
import Horse10 from "./img/Horse10.jpg";


const SlidingImages: React.FC = () => {
  return (  
    <section className="HomeSection" id="Home" tabIndex={0}> 
    <h3>Fotky z akcí <i className="fa-solid fa-face-smile-beam"></i></h3>     
     <div className="sliding-images-container"> 
        <div className="sliding-images-track"> 
            <img src={Horse1} alt=""/>
            <img src={Horse2} alt=""/>
            <img src={Horse3} alt=""/>
            <img src={Horse4} alt=""/>
            <img src={Horse5} alt=""/>
            <img src={Horse6} alt=""/>
            <img src={Horse7} alt=""/>
            <img src={Horse8} alt=""/>
            <img src={Horse9} alt=""/>
            <img src={Horse10} alt=""/> 
             {/* //aby to jelo bez sekání do nekonečna */} 
              <img src={Horse1} alt=""/>
            <img src={Horse2} alt=""/>
            <img src={Horse3} alt=""/>
            <img src={Horse4} alt=""/>
            <img src={Horse5} alt=""/>
            <img src={Horse6} alt=""/>
            <img src={Horse7} alt=""/>
            <img src={Horse8} alt=""/>
            <img src={Horse9} alt=""/>
            <img src={Horse10} alt=""/>
        </div>
     </div>

    </section>
     );
};

export default SlidingImages;