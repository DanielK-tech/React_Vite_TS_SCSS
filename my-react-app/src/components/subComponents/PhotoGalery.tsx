import React, { useState } from "react"; 

/** Obrázky ****/ 
import Horse1 from "../img/Horse1.jpg";
import Horse2 from "../img/Horse2.jpg";
import Horse3 from "../img/Horse3.jpg";
import Horse4 from "../img/Horse4.jpg";
import Horse5 from "../img/Horse5.jpg";
import Horse6 from "../img/Horse6.jpg";
import Horse7 from "../img/Horse7.jpg";
import Horse8 from "../img/Horse8.jpg";
import Horse9 from "../img/Horse9.jpg";
import Horse10 from "../img/Horse10.jpg"; 

const photos = [Horse1, Horse2, Horse3, Horse4, Horse5, Horse6, Horse7, Horse8, Horse9, Horse10];

const GaleryPhoto: React.FC = () => { 
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex !== null && prevIndex > 0 ? prevIndex - 1 : photos.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex !== null && prevIndex < photos.length - 1 ? prevIndex + 1 : 0));
  };

     return (  
        <section className="HomeSection" id="Home" tabIndex={0}> 
            <div className="PhotoGalery"> 
                <div className="thumbnails">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            onClick={() => openModal(index)}
            className="thumbnail"
          />
        ))}
      </div> 
          {currentIndex !== null && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={closeModal}>
              &times;
            </button>
            <button className="nav left" onClick={goToPrevious}>
              &#10094;
            </button>
            <div className="actualViev"> 
            <img src={photos[currentIndex]} alt={`Photo ${currentIndex + 1}`} className="modal-image" />
            </div>
            <button className="nav right" onClick={goToNext}>
              &#10095;
            </button>
          </div>
        </div>
      )}
            </div>
        </section>
        );
};

export default GaleryPhoto;
