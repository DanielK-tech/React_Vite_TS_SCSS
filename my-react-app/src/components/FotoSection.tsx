import React from "react";  
/** Obrázky ****/ 
import Horse1 from "./img/Horse1.jpg";
import Horse2 from "./img/Horse2.jpg";
import Horse3 from "./img/img0.jpg";
import Horse4 from "./img/tel3.jpg";
import Horse5 from "./img/img2.jpg";
import Horse6 from "./img/trofej.jpg";
import Horse7 from "./img/akce09.jpg";
import Horse8 from "./img/akce16.jpg";
import Horse9 from "./img/trofej1.jpg";
import Horse10 from "./img/akce12.jpg"; 

// Pole s obrázky
const photos: string[] = [
  Horse1,
  Horse2,
  Horse3,
  Horse4,
  Horse5,
  Horse6,
  Horse7,
  Horse8,
  Horse9,
  Horse10,
];


const SlidingImages: React.FC = () => {
  return (  
    <section className="HomeSection" id="Home" tabIndex={0}> 
    <h3>Fotky z akcí <i className="fa-solid fa-face-smile-beam"></i></h3>     
     <div className="sliding-images-container"> 
        <div className="sliding-images-track"> 
           {/* Vykreslení obrázků */}
          {photos.concat(photos).map((photo: string | undefined, index) => (
            <img key={index} src={photo} alt={`Horse ${index + 1}`} />
          ))}
             {/* //aby to jelo bez sekání do nekonečna */} 
               {/* Vykreslení obrázků */}
          {photos.concat(photos).map((photo: string | undefined, index) => (
            <img key={index} src={photo} alt={`Horse ${index + 1}`} />
          ))}
        </div>
     </div>

    </section>
     );
};

export default SlidingImages;