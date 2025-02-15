import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Komponenty */
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeInfo from "./components/MainContent";
import About from "./components/AboutMe";
import Contact from "./components/Contact"; 
import Dialog from "./components/Dialog"; 
/***Subkomponenty  */ 
import HobyHorsing from "./components/subComponents/HobyHorsing";
import HorseClub from "./components/subComponents/HorseClub";
import PonySchool from "./components/subComponents/PonySchool";
import HipoSocial from "./components/subComponents/HipoSocial";
import HipoContact from "./components/subComponents/HipoContact";
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
            <Route path="/contact" element={<Contact />} /> 
            {/* Aktivity */}
            <Route path="/foto-galery" element={<GaleryPhoto />} />{" "} 
            <Route path="/hobby-horsing/" element={<HobyHorsing />} />
            <Route path="/jezdecky-klub" element={<HorseClub />} />
            <Route path="/pony-skolicka" element={<PonySchool />} />
            <Route path="/hiporehabilitace-praxe" element={<HipoSocial />} />
            <Route path="/hyporehabilitace-kontakt" element={<HipoContact />} />

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
