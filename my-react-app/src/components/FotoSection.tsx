import { UIContext } from "./utils/UIContext";
import { useContext, useState, useEffect, useCallback } from "react"; 
/** scss */ 
import "../styles/fotosection.scss";

/** Obrázky ****/
import Horse1 from "/img/Horse1.jpg";
import Horse2 from "/img/Horse2.jpg";
import Horse3 from "/img/img0.jpg";
import Horse4 from "/img/tel3.jpg";
import Horse5 from "/img/img2.jpg";
import Horse6 from "/img/trofej.jpg";
import Horse7 from "/img/akce09.jpg";
import Horse8 from "/img/akce16.jpg";
import Horse9 from "/img/trofej1.jpg";
import Horse10 from "/img/akce12.jpg";

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
                        <img
                            key={index}
                            src={photo}
                            alt={`Horse ${index + 1}`}
                        />
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
