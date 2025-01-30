import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Komponenty */
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeInfo from "./components/MainContent";
import About from "./components/AboutMe";
import Contact from "./components/Contact"; 
import Dialog from "./components/Dialog";
/**FotoGalerie */
import GaleryPhoto from "./components/subComponents/PhotoGalery";
import "leaflet/dist/leaflet.css"; //Mapa!!!!!!!!!!
/** SVG **/


function App() {  
  return (
    <>
      <BrowserRouter>
        <Header /> {/* Navigace dostupná na všech stránkách */}
        <main>
          <Routes>
            {/* Definujeme routy v mainu */}
            <Route path="/*" element={<HomeInfo />} /> {/* Úvodní stránka */}
            <Route path="/about/*" element={<About />} />{" "}
            {/* O mně + všechno co je na té stránce  /**/}
            <Route path="/contact" element={<Contact />} /> {/* Kontakt */}
            <Route path="/foto-galery" element={<GaleryPhoto />} />{" "}
            {/* FotoGalerie */}
          </Routes>
        </main> 
        <Dialog />        
        <Footer /> {/* Patička dostupná na všech stránkách */}
      </BrowserRouter>
    </>
  );
}

export default App;
