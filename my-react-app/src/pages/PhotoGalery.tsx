import React, { useState } from "react";
// breadcrubms
import Breadcrumb from "../components/BreadCrumb";
// Dynamický import obrázků pomocí Vite glob patternu
const photoModules = import.meta.glob("../components/galery/*.{jpg,png}", {
  eager: true,
});

// 2. Bezpečné zpracování s kontrolou čísel
const photos = Object.entries(photoModules)
  .map(([path, module]) => {
    const fileName = path.split("/").pop() || "";
    const numberMatch = fileName.match(/(\d+)/);

    // 3. Pokud číslo chybí, vynecháme soubor
    if (!numberMatch) {
      console.warn(`Soubor ${fileName} nebyl načten - chybí číslo v názvu`);
      return null;
    }

    return {
      url: (module as { default: string }).default,
      number: parseInt(numberMatch[1]),
      fileName: fileName,
    };
  })
  .filter((item): item is NonNullable<typeof item> => item !== null) // TypeScript guard
  .sort((a, b) => a.number - b.number)
  .map((item) => item.url);

// 4. Kontrola před renderováním
if (photos.length === 0) {
  console.error("Žádné platné obrázky nebyly nalezeny!");
}

const GaleryPhoto: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number) => setCurrentIndex(index);
  const closeModal = () => setCurrentIndex(null);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex !== null && prevIndex > 0 ? prevIndex - 1 : photos.length - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex !== null && prevIndex < photos.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <section className="HomeSection photoCrumbs" id="Home" tabIndex={0}>
      <div className="PhotoGalery">
        <Breadcrumb currentPage="Fotogalerie" />
        <div className="pohotoConteiner">
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
                <img
                  src={photos[currentIndex]}
                  alt={`Photo ${currentIndex + 1}`}
                  className="modal-image"
                />
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
