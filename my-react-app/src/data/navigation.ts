import { normalizePath } from "./site";

export interface NavigationLinkItem {
  type: "link";
  href: string;
  label: string;
  matchStrategy?: "exact" | "prefix";
}

export interface NavigationActivitiesItem {
  type: "activities";
  label: string;
}

export type PrimaryNavigationItem =
  | NavigationLinkItem
  | NavigationActivitiesItem;

export interface DownloadDocument {
  href: string;
  label: string;
  description?: string;
  fileName?: string;
}

interface PdfDocumentConfig {
  slug: string;
  label: string;
  description?: string;
  fileName?: string;
}

interface PublicPdfDocumentConfig {
  publicFileName: string;
  label: string;
  description?: string;
  fileName?: string;
}

export interface ActivitiesMenuLinkItem {
  type: "link";
  href: string;
  iconClassName: string;
  label: string;
}

export interface ActivitiesMenuDocumentsItem {
  type: "documents";
  iconClassName: string;
  label: string;
  pickerTitle: string;
  pickerDescription: string;
  downloadButtonLabel: string;
  documents: DownloadDocument[];
}

export type ActivitiesMenuItem =
  | ActivitiesMenuLinkItem
  | ActivitiesMenuDocumentsItem;

const createPdfDocument = ({
  slug,
  label,
  description,
  fileName,
}: PdfDocumentConfig): DownloadDocument => ({
  href: `/pdf/${slug}.pdf`,
  label,
  description,
  fileName: fileName ?? `${slug}.pdf`,
});

const createPublicPdfDocument = ({
  publicFileName,
  label,
  description,
  fileName,
}: PublicPdfDocumentConfig): DownloadDocument => ({
  href: encodeURI(`/pdf/${publicFileName}`),
  label,
  description,
  fileName: fileName ?? publicFileName,
});

export const primaryNavigationItems = [
  {
    type: "link",
    href: "/",
    label: "Úvod",
  },
  {
    type: "link",
    href: "/about/",
    label: "O nás",
    matchStrategy: "prefix",
  },
  {
    type: "activities",
    label: "Aktivity",
  },
  {
    type: "link",
    href: "/contact/",
    label: "Kontakt",
  },
] as const satisfies readonly PrimaryNavigationItem[];

export const activitiesMenuItems = [
  {
    type: "link",
    href: "/foto-galery/",
    iconClassName: "fa-solid fa-photo-film",
    label: "Fotogalerie",
  },
  {
    type: "link",
    href: "/hobby-horsing/",
    iconClassName: "fa-solid fa-horse-head",
    label: "Hobby horsing",
  },
  {
    type: "link",
    href: "/jezdecky-klub/",
    iconClassName: "fa-solid fa-horse",
    label: "Jezdecký klub",
  },
  {
    type: "link",
    href: "/pony-skolicka/",
    iconClassName: "fa-solid fa-school-flag",
    label: "Pony školička",
  },
  {
    type: "link",
    href: "/hiporehabilitace-praxe/",
    iconClassName: "fa-solid fa-house-user",
    label: "Hiporehabilitace v pedagogické a sociální praxi",
  },
  {
    type: "link",
    href: "/hyporehabilitace-kontakt/",
    iconClassName: "fa-solid fa-house-medical",
    label: "Hiporehabilitace v kontaktní terapii",
  },
  {
    type: "link",
    href: "/para-jezdectvi/",
    iconClassName: "fa-solid fa-wheelchair-move",
    label: "Parajezdectví",
  },
  {
    type: "documents",
    iconClassName: "fa-solid fa-file-arrow-down",
    label: "Dokumenty ke stažení",
    pickerTitle: "Dokumenty ke stažení",
    pickerDescription:
      "Vyberte jeden nebo více dokumentů, které chcete stáhnout.",
    downloadButtonLabel: "Stáhnout vybrané dokumenty",
    documents: [
      createPdfDocument({
        slug: "vyrocni-zprava-sk-blind-guardians-2025",
        label: "Výroční zpráva SK Blind Guardians 2025",
        description: "PDF dokument uložený ve veřejné složce webu.",
        fileName: "Vyrocni-zprava-SK-Blind-Guardians-2025.pdf",
      }),
      createPdfDocument({
        slug: "vyrocni-zprava-sk-blind-guardians-2024",
        label: "Výroční zpráva SK Blind Guardians 2024",
        description: "PDF dokument uložený ve veřejné složce webu.",
        fileName: "Vyrocni-zprava-SK-Blind-Guardians-2024.pdf",
      }),
      createPublicPdfDocument({
        publicFileName: "chovatelsky-krouzek-uvodni-instrukce.pdf",
        label: "Chovatelský kroužek - úvodní instrukce",
        description: "PDF dokument uložený ve veřejné složce webu.",
      }),
      createPublicPdfDocument({
        publicFileName: "hpsp-uvodni-instrukce.pdf",
        label: "HPSP - úvodní instrukce",
        description: "PDF dokument uložený ve veřejné složce webu.",
      }),
      createPublicPdfDocument({
        publicFileName: "jezdecky-klub-uvodni-instrukce.pdf",
        label: "Jezdecký klub - úvodní instrukce",
        description: "PDF dokument uložený ve veřejné složce webu.",
      }),
      createPublicPdfDocument({
        publicFileName: "pony-skolicka-uvodni-instrukce.pdf",
        label: "Pony školička - úvodní instrukce",
        description: "PDF dokument uložený ve veřejné složce webu.",
      }),
    ],
  },
] as const satisfies readonly ActivitiesMenuItem[];

export const isNavigationLinkActive = (
  currentPath: string,
  item: NavigationLinkItem,
) => {
  const normalizedCurrentPath = normalizePath(currentPath);
  const normalizedHref = normalizePath(item.href);

  if (item.matchStrategy === "prefix") {
    return normalizedCurrentPath.startsWith(normalizedHref);
  }

  return normalizedCurrentPath === normalizedHref;
};
