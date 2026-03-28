import type { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";
import ContactUS from "./OurServices";
import FotoSection from "./FotoSection";
import UIContextProvider from "./utils/UIContext";
import { normalizePath } from "../data/site";

interface AppLayoutProps {
  children: ReactNode;
  pathname: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, pathname }) => {
  const currentPath = normalizePath(pathname);
  const shouldShowPromoSections =
    currentPath !== "/contact/" && currentPath !== "/foto-galery/";

  return (
    <UIContextProvider>
      <Header currentPath={currentPath} />
      <main>{children}</main>
      {shouldShowPromoSections && (
        <>
          <ContactUS />
          <FotoSection />
        </>
      )}
      <Footer />
    </UIContextProvider>
  );
};

export default AppLayout;
