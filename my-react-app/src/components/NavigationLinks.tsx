import type { MouseEventHandler } from "react";

import {
  activitiesMenuItems,
  isNavigationLinkActive,
  primaryNavigationItems,
  type ActivitiesMenuItem,
} from "../data/navigation.ts";
import ActivitiesMenu from "./ActivitiesMenu.tsx";

type NavigationClickHandler =
  | MouseEventHandler<HTMLAnchorElement>
  | (() => void);

interface NavigationLinksProps {
  currentPath: string;
  getMainLinkClickHandler?: (
    href: string,
  ) => NavigationClickHandler | undefined;
  getActivityItemClickHandler?: (
    item: ActivitiesMenuItem,
  ) => NavigationClickHandler | undefined;
  onDocumentDownload?: () => void;
  showActivitiesArrow?: boolean;
  showActivitiesImage?: boolean;
  activitiesSubmenuClassName?: string;
  activitiesSubmenuId?: string;
  listClassName?: string;
  wrapActivitiesInContainer?: boolean;
}

function NavigationLinks({
  currentPath,
  getMainLinkClickHandler,
  getActivityItemClickHandler,
  onDocumentDownload,
  showActivitiesArrow = false,
  showActivitiesImage = false,
  activitiesSubmenuClassName,
  activitiesSubmenuId,
  listClassName,
  wrapActivitiesInContainer = false,
}: NavigationLinksProps) {
  return (
    <ul className={listClassName}>
      {primaryNavigationItems.map((item) => {
        if (item.type === "activities") {
          return (
            <ActivitiesMenu
              key={item.label}
              currentPath={currentPath}
              items={activitiesMenuItems}
              getItemClickHandler={getActivityItemClickHandler}
              onDocumentDownload={onDocumentDownload}
              showArrow={showActivitiesArrow}
              showImage={showActivitiesImage}
              submenuClassName={activitiesSubmenuClassName}
              submenuId={activitiesSubmenuId}
              triggerLabel={item.label}
              wrapInContainer={wrapActivitiesInContainer}
            />
          );
        }

        return (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={getMainLinkClickHandler?.(item.href)}
              aria-current={
                isNavigationLinkActive(currentPath, item) ? "page" : undefined
              }
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NavigationLinks;
