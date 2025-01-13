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
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
      <>
          <BrowserRouter>
              <Header /> {/* Navigace dostupná na všech stránkách */} 
              <main>
              <Routes>
                  {/* Definujeme routy */}
                  <Route path="/*" element={<HomeInfo />} /> {/* Úvodní stránka */} 
                  <Route path="/about" element={<About />} /> {/* O mně */} 
                  <Route path="/contact" element={<Contact />} /> {/* Kontakt */}
              </Routes> 
              </main> 
              <Footer /> {/* Patička dostupná na všech stránkách */}
          </BrowserRouter>          
      </>
  );
}

export default App;
