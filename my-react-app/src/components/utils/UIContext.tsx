// src/context/UIContext.tsx
import React, { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

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

const applyTheme = (theme: "light" | "dark") => {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.setAttribute("data-theme", theme);

  if (document.body) {
    document.body.setAttribute("data-theme", theme);
  }
};

interface UIContextProviderProps {
  children: ReactNode;
}

const UIContextProvider: React.FC<UIContextProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  // Stav pro menu
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  // Stav pro scroll
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Přepínání režimu
  const toggleMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      const theme = newMode ? "dark" : "light";

      applyTheme(theme);

      if (typeof window !== "undefined") {
        window.localStorage.setItem("theme", theme);
      }

      return newMode;
    });
  };

  // Nastavení režimu při načtení stránky
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const savedMode = window.localStorage.getItem("theme");
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const resolvedDarkMode = savedMode ? savedMode === "dark" : prefersDarkMode;

    setIsDarkMode(resolvedDarkMode);
    applyTheme(resolvedDarkMode ? "dark" : "light");
  }, []);

  // Detekce scrollování
  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funkce pro scroll nahoru
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Přepnutí zobrazení menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Odkazy
  const Hippos = () => {
    if (typeof window !== "undefined") {
      window.open("https://hiporehabilitace-cr.com/", "_blank");
    }
  };

  const Register = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://hiporehabilitace-cr.com/provozovatele-hiporehabilitace/registrovana-strediska/",
        "_blank",
      );
    }
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
