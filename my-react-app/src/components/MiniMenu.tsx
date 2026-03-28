import NavigationLinks from "./NavigationLinks.tsx";

const cross = "/img/cross.png";

interface MiniMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  scrollToTop: () => void;
  currentPath: string;
}

const MiniMenu: React.FC<MiniMenuProps> = ({
  isMenuOpen,
  toggleMenu,
  scrollToTop,
  currentPath,
}) => (
  <div
    className="menu-container-mini"
    style={{ display: isMenuOpen ? "block" : "none" }}
  >
    <NavigationLinks
      currentPath={currentPath}
      getMainLinkClickHandler={() => scrollToTop}
      getActivityItemClickHandler={(item) =>
        item.type === "link" ? toggleMenu : undefined
      }
      onDocumentDownload={toggleMenu}
      activitiesSubmenuClassName="submenu miniMenu"
      activitiesSubmenuId="activities-submenu-mini"
      listClassName="menu"
      wrapActivitiesInContainer
    />
    <img src={cross} alt="křížek" className="cross" onClick={toggleMenu} />
  </div>
);

export default MiniMenu;
