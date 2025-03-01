// src/context/UIContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface UIContextProps {
  isDarkMode: boolean;
  toggleMode: () => void;
  isMenuOpen: boolean;
  toggleMenu: () => void;
  isScrolled: boolean;
  scrollToTop: () => void;
  Hippos: () => void;
  Register: () => void;
}

const defaultValue: UIContextProps = {
  isDarkMode: false,
  toggleMode: () => {},
  isMenuOpen: false,
  toggleMenu: () => {},
  isScrolled: false,
  scrollToTop: () => {},
  Hippos: () => {},
  Register: () => {},
};

export const UIContext = createContext<UIContextProps>(defaultValue);

interface UIContextProviderProps {
  children: ReactNode;
}

const UIContextProvider: React.FC<UIContextProviderProps> = ({ children }) => {
  // Stav pro režim (Light/Dark)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("theme");
    return savedMode === "dark";
  });
  // Stav pro menu
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // Stav pro scroll
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Přepínání režimu
  const toggleMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      document.body.setAttribute("data-theme", newMode ? "dark" : "light");
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  // Nastavení režimu při načtení stránky
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      document.body.setAttribute("data-theme", savedMode);
    }
  }, []);

  // Detekce scrollování
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funkce pro scroll nahoru
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Přepnutí zobrazení menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Odkazy
  const Hippos = () => {
    window.open("https://hiporehabilitace-cr.com/", "_blank");
  };

  const Register = () => {
    window.open(
      "https://hiporehabilitace-cr.com/provozovatele-hiporehabilitace/registrovana-strediska/",
      "_blank"
    );
  };

  return (
    <UIContext.Provider
      value={{
        isDarkMode,
        toggleMode,
        isMenuOpen,
        toggleMenu,
        isScrolled,
        scrollToTop,
        Hippos,
        Register,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;
