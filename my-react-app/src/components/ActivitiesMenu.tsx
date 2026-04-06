import { useEffect, useId, useState, type MouseEventHandler } from "react";

import type {
  ActivitiesMenuDocumentsItem,
  ActivitiesMenuItem,
} from "../data/navigation.ts";
import { normalizePath } from "../data/site.ts";

const indianHorse = "/img/indianHorse.png";

export type ActivityItemClickHandler =
  | MouseEventHandler<HTMLAnchorElement>
  | (() => void);

interface ActivitiesMenuProps {
  currentPath: string;
  items: readonly ActivitiesMenuItem[];
  getItemClickHandler?: (
    item: ActivitiesMenuItem,
  ) => ActivityItemClickHandler | undefined;
  onDocumentDownload?: () => void;
  showArrow?: boolean;
  showImage?: boolean;
  submenuClassName?: string;
  submenuId?: string;
  triggerLabel?: string;
  wrapInContainer?: boolean;
}

function ActivitiesMenu({
  currentPath,
  items,
  getItemClickHandler,
  onDocumentDownload,
  showArrow = false,
  showImage = false,
  submenuClassName = "submenu",
  submenuId,
  triggerLabel = "Aktivity",
  wrapInContainer = false,
}: ActivitiesMenuProps) {
  const [activeDocumentItem, setActiveDocumentItem] =
    useState<ActivitiesMenuDocumentsItem | null>(null);
  const [selectedDocumentHrefs, setSelectedDocumentHrefs] = useState<string[]>(
    [],
  );
  const titleId = useId();

  useEffect(() => {
    if (!activeDocumentItem) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveDocumentItem(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeDocumentItem]);

  const openDocumentPicker = (item: ActivitiesMenuDocumentsItem) => {
    setActiveDocumentItem(item);
    setSelectedDocumentHrefs(item.documents[0] ? [item.documents[0].href] : []);
  };

  const closeDocumentPicker = () => {
    setActiveDocumentItem(null);
    setSelectedDocumentHrefs([]);
  };

  const selectedDocuments = activeDocumentItem?.documents.filter(({ href }) =>
    selectedDocumentHrefs.includes(href),
  );

  const toggleDocumentSelection = (href: string) => {
    setSelectedDocumentHrefs((currentSelection) =>
      currentSelection.includes(href)
        ? currentSelection.filter((selectedHref) => selectedHref !== href)
        : [...currentSelection, href],
    );
  };

  const handleDocumentDownload = () => {
    if (!selectedDocuments || selectedDocuments.length === 0) {
      return;
    }

    for (const selectedDocument of selectedDocuments) {
      const downloadLink = window.document.createElement("a");

      downloadLink.href = selectedDocument.href;
      downloadLink.download =
        selectedDocument.fileName ??
        decodeURIComponent(
          selectedDocument.href.split("/").pop() ?? "dokument.pdf",
        );
      downloadLink.rel = "noopener";
      downloadLink.style.display = "none";

      window.document.body.appendChild(downloadLink);
      downloadLink.click();
      window.document.body.removeChild(downloadLink);
    }

    closeDocumentPicker();
    onDocumentDownload?.();
  };

  const submenu = (
    <ul className={submenuClassName} id={submenuId}>
      {showImage ? (
        <img className="IndianHorse" src={indianHorse} alt="" />
      ) : null}
      {items.map((item) => {
        if (item.type === "documents") {
          return (
            <li key={item.label}>
              <button
                type="button"
                className="submenuButton"
                onClick={() => openDocumentPicker(item)}
                aria-haspopup="dialog"
                aria-expanded={activeDocumentItem?.label === item.label}
              >
                <i className={item.iconClassName}></i>
                {item.label}
              </button>
            </li>
          );
        }

        return (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={getItemClickHandler?.(item)}
              aria-current={
                normalizePath(currentPath) === normalizePath(item.href)
                  ? "page"
                  : undefined
              }
            >
              <i className={item.iconClassName}></i>
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      <li className="Aktivity">
        <a
          href={submenuId ? `#${submenuId}` : "#submenu"}
          onClick={(event) => event.preventDefault()}
        >
          {triggerLabel}
        </a>
        {showArrow ? (
          <div className="arrowDown">
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
        ) : null}
        {wrapInContainer ? (
          <div className="submenuContainer">{submenu}</div>
        ) : (
          submenu
        )}
      </li>
      {activeDocumentItem ? (
        <div
          className="documentsPickerBackdrop"
          role="presentation"
          onClick={closeDocumentPicker}
        >
          <div
            className="documentsPickerDialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="documentsPickerClose"
              onClick={closeDocumentPicker}
              aria-label="Zavřít výběr dokumentů"
            >
              <i className="fa-solid fa-xmark" aria-hidden="true"></i>
            </button>
            <h3 id={titleId}>{activeDocumentItem.pickerTitle}</h3>
            <p>{activeDocumentItem.pickerDescription}</p>
            <div className="documentsPickerList">
              {activeDocumentItem.documents.map((document) => (
                <label key={document.href} className="documentsPickerOption">
                  <input
                    type="checkbox"
                    checked={selectedDocumentHrefs.includes(document.href)}
                    onChange={() => toggleDocumentSelection(document.href)}
                  />
                  <span>
                    <strong>{document.label}</strong>
                    {document.description ? (
                      <small>{document.description}</small>
                    ) : null}
                  </span>
                </label>
              ))}
            </div>
            <div className="documentsPickerActions">
              <button
                type="button"
                className={`documentsPickerDownload ${selectedDocuments && selectedDocuments.length > 0 ? "" : "isDisabled"}`}
                onClick={handleDocumentDownload}
                disabled={!selectedDocuments || selectedDocuments.length === 0}
                aria-disabled={
                  selectedDocuments && selectedDocuments.length > 0
                    ? undefined
                    : true
                }
              >
                {activeDocumentItem.downloadButtonLabel}
              </button>
              <button
                type="button"
                className="documentsPickerCancel"
                onClick={closeDocumentPicker}
              >
                Zavřít
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ActivitiesMenu;
