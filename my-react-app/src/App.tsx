// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Komponenty */
import Header from "./components/Header";  
import Footer from "./components/Footer";
import HomeInfo from "./components/MainContent";  
import About from "./components/AboutMe"; 
import Contact from "./components/Contact"; 
/**FotoGalerie */ 
import GaleryPhoto from "./components/subComponents/PhotoGalery"; 
/** SVG **/ 
import ReactLogo from "./assets/vlny.svg";
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
      <>
          <BrowserRouter>
              <Header /> {/* Navigace dostupná na všech stránkách */} 
              <main>
              <Routes>
                  {/* Definujeme routy v mainu */}
                  <Route path="/*" element={<HomeInfo />} /> {/* Úvodní stránka */} 
                  <Route path="/about" element={<About />} /> {/* O mně */} 
                  <Route path="/contact" element={<Contact />} /> {/* Kontakt */} 
                  <Route path="/foto-galery" element={<GaleryPhoto />} /> {/* Kontakt */}
              </Routes>  
                {/* <OurService /> Nabídka služeb */}
              </main>                
              <img src={ReactLogo} alt="" className="FirstSVG" />  
              {/* <ReactLogo  />  */}
              <Footer /> {/* Patička dostupná na všech stránkách */}
          </BrowserRouter>          
      </>
  );
}

export default App;
