import { UIContext } from "./utils/UIContext";
import { useContext, useState, useEffect, useCallback } from "react";
/** scss */
import "../styles/fotosection.scss";

// Pole s obrázky
const photos: string[] = [
  "/img/Horse1.jpg",
  "/img/Horse2.jpg",
  "/img/img0.jpg",
  "/img/tel3.jpg",
  "/img/img2.jpg",
  "/img/trofej.jpg",
  "/img/akce09.jpg",
  "/img/akce16.jpg",
  "/img/trofej1.jpg",
  "/img/akce12.jpg",
];

const SlidingImages: React.FC = () => {
  const { isDarkMode } = useContext(UIContext);
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageWidth, setImageWidth] = useState(460); // Default width + margin

  // Get actual image width on component mount
  useEffect(() => {
    const imgElement = document.querySelector(".sliding-images-track img");
    if (imgElement) {
      const width = imgElement.clientWidth + 10; // Image width + margin
      setImageWidth(width);
    }
  }, []);

  // Animation and auto-resume effect
  useEffect(() => {
    let animationInterval: NodeJS.Timeout | null = null;
    let pauseTimeout: NodeJS.Timeout | null = null;

    if (!isPaused) {
      // Continuous animation when not paused
      animationInterval = setInterval(() => {
        setPosition((prev) => {
          // Reset position when reaching the end of first set of images
          if (prev <= -photos.length * imageWidth) {
            return 0;
          }
          return prev - 1; // Move 1px at a time for smooth animation
        });
      }, 30);
    } else {
      // Auto-resume after 15 seconds of inactivity
      pauseTimeout = setTimeout(() => {
        setIsPaused(false);
      }, 15000);
    }

    return () => {
      if (animationInterval) clearInterval(animationInterval);
      if (pauseTimeout) clearTimeout(pauseTimeout);
    };
  }, [isPaused, imageWidth]);

  // Scroll functions
  const scrollLeft = useCallback(() => {
    setIsPaused(true);
    setPosition((prev) => {
      // If already at the beginning or close to it, jump to the end
      if (prev >= 0) {
        return -(photos.length - 1) * imageWidth;
      }
      return prev + imageWidth;
    });
  }, [imageWidth]);

  const scrollRight = useCallback(() => {
    setIsPaused(true);
    setPosition((prev) => {
      // If already at the end or close to it, jump to the beginning
      if (prev <= -(photos.length - 1) * imageWidth) {
        return 0;
      }
      return prev - imageWidth;
    });
  }, [imageWidth]);

  return (
    <section className="HomeSection" id="Home" tabIndex={0}>
      <h3>
        Fotky z akcí{" "}
        <i
          className={`fa-solid ${
            isDarkMode ? "fa-face-grin-wink" : "fa-face-smile-beam"
          }`}
        ></i>
      </h3>
      <div className="sliding-images-container">
        <button className="arrow-button left" onClick={scrollLeft}>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <div
          className="sliding-images-track"
          style={{ transform: `translateX(${position}px)` }}
        >
          {photos.concat(photos).map((photo, index) => (
            <img key={index} src={photo} alt={`Horse ${index + 1}`} />
          ))}
        </div>
        <button className="arrow-button right" onClick={scrollRight}>
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default SlidingImages;
