// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Komponenty */
import Header from "./components/Header"; 
import HomeInfo from "./components/MainContent"; 
import About from "./components/AboutMe";
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
              </Routes> 
              </main>
          </BrowserRouter>          
      </>
  );
}

export default App;
