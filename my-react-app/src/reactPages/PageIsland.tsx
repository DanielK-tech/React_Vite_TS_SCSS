import type { ReactNode } from "react";

import AppLayout from "../components/AppLayout";
import type { AboutSection } from "../data/site";
import AboutMeView from "./views/AboutMeView";
import ContactView from "./views/ContactView";
import HipoContactView from "./views/HipoContactView";
import HipoSocialView from "./views/HipoSocialView";
import HobyHorsingView from "./views/HobyHorsingView";
import HorseClubView from "./views/HorseClubView";
import MainContentView from "./views/MainContentView";
import ParaRidingView from "./views/ParaRidingView";
import PhotoGaleryView from "./views/PhotoGaleryView";
import PonySchoolView from "./views/PonySchoolView";

export type PageKey =
  | "home"
  | "about"
  | "contact"
  | "gallery"
  | "hobbyHorsing"
  | "horseClub"
  | "ponySchool"
  | "hipoPraxe"
  | "hipoContact"
  | "paraRiding";

export interface PageIslandProps {
  pathname: string;
  page: PageKey;
  aboutSection?: AboutSection;
  "client:load"?: boolean;
}

const PageIsland: React.FC<PageIslandProps> = ({
  pathname,
  page,
  aboutSection = "overview",
}) => {
  let content: ReactNode;

  switch (page) {
    case "home":
      content = <MainContentView />;
      break;
    case "about":
      content = <AboutMeView initialSection={aboutSection} />;
      break;
    case "contact":
      content = <ContactView />;
      break;
    case "gallery":
      content = <PhotoGaleryView />;
      break;
    case "hobbyHorsing":
      content = <HobyHorsingView />;
      break;
    case "horseClub":
      content = <HorseClubView />;
      break;
    case "ponySchool":
      content = <PonySchoolView />;
      break;
    case "hipoPraxe":
      content = <HipoSocialView />;
      break;
    case "hipoContact":
      content = <HipoContactView />;
      break;
    case "paraRiding":
      content = <ParaRidingView />;
      break;
    default:
      content = <MainContentView />;
  }

  return <AppLayout pathname={pathname}>{content}</AppLayout>;
};

export default PageIsland;
