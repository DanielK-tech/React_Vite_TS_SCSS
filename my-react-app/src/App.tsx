// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Komponenty */
import Welcome from "./components/Welcome";
// import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Definujeme routy */}
          <Route path="/*" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
