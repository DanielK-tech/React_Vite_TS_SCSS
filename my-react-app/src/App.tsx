import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
/** Komponenty */
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeInfo from "./pages/MainContent";
import About from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Dialog from "./components/Dialog";
import ContactUS from "./components/OurServices";
import FotoSection from "./components/FotoSection";
/***Subkomponenty  */
import HobyHorsing from "./pages/HobyHorsing";
import HorseClub from "./pages/HorseClub";
import PonySchool from "./pages/PonySchool";
import HipoSocial from "./pages/HipoSocial";
import HipoContact from "./pages/HipoContact";
/**FotoGalerie */
import GaleryPhoto from "./pages/PhotoGalery";
import "leaflet/dist/leaflet.css"; //Mapa!!!!!!!!!!
//Globální logika
import UIContextProvider from "./components/utils/UIContext";

function Layout() {
    const location = useLocation();

    return (
        <>
            <Header /> {/* Navigace dostupná na všech stránkách */}
            <main>
                <Routes>
                    <Route path="/*" element={<HomeInfo />} />
                    <Route path="/about/*" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/foto-galery" element={<GaleryPhoto />} />
                    <Route path="/hobby-horsing/" element={<HobyHorsing />} />
                    <Route path="/jezdecky-klub" element={<HorseClub />} />
                    <Route path="/pony-skolicka" element={<PonySchool />} />
                    <Route
                        path="/hiporehabilitace-praxe"
                        element={<HipoSocial />}
                    />
                    <Route
                        path="/hyporehabilitace-kontakt"
                        element={<HipoContact />}
                    />
                </Routes>
            </main>
            {/* Skryje ContactUS a FotoSection na stránce /contact */}
            {location.pathname !== "/contact" &&
                location.pathname !== "/foto-galery" && (
                    <>
                        <ContactUS />
                        <FotoSection />
                    </>
                )}
            <Dialog />
            <Footer /> {/* Patička dostupná na všech stránkách */}
        </>
    );
}

function App() {
    return (
        <UIContextProvider>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </UIContextProvider>
    );
}

export default App;
