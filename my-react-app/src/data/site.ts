export const SITE = {
  name: "Blind Guardians",
  siteUrl: "https://skblindguardians.cz",
  defaultDescription:
    "Blind Guardians propojuje hiporehabilitaci, parajezdectvi, pony skoličku a volnocasove aktivity s konmi pro deti i dospele.",
  defaultImage: "/img/uvod1.jpg",
  contactEmail: "jana.stixova@seznam.cz",
  contactPhone: "+420 777 082 915",
};

export type AboutSection = "overview" | "team" | "horses";

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  image?: string;
}

export const normalizePath = (path: string) => {
  if (!path || path === "/") {
    return "/";
  }

  return `/${path.replace(/^\/+|\/+$/g, "")}/`;
};

export const getCanonicalUrl = (path: string) =>
  new URL(normalizePath(path), SITE.siteUrl).toString();

export const pageSeo = {
  home: {
    path: "/",
    title: "Blind Guardians",
    description:
      "Hiporehabilitace, pony skolička, hobby horsing a dalsi aktivity s konmi pod vedenim spolku Blind Guardians.",
  },
  about: {
    path: "/about/",
    title: "O nas",
    description:
      "Poznejte spolek Blind Guardians, nas tym a kone, se kterymi se venujeme hiporehabilitaci a jezdeckym aktivitám.",
  },
  aboutTeam: {
    path: "/about/our-team/",
    title: "Náš tým",
    description:
      "Seznamte se s lidmi, kteri stoji za cinnosti Blind Guardians a vedou jednotlivé programy a aktivity.",
  },
  aboutHorses: {
    path: "/about/our-horses/",
    title: "Naši koně",
    description:
      "Prehled koni, kteri jsou soucasti aktivit a terapie Blind Guardians, vcetne jejich pribehu a role v tymu.",
  },
  contact: {
    path: "/contact/",
    title: "Kontakt",
    description:
      "Kontaktujte Blind Guardians, najdete nas v Brezove a muzete nam napsat pres jednoduchy kontaktni formular.",
  },
  gallery: {
    path: "/foto-galery/",
    title: "Fotogalerie",
    description:
      "Fotogalerie akci, treningu a setkani spolku Blind Guardians se zamerenim na kone, deti a rehabilitaci.",
  },
  hobbyHorsing: {
    path: "/hobby-horsing/",
    title: "Hobby horsing",
    description:
      "Informace o hobby horsingu v Blind Guardians, pravidelnych trenincich a navaznosti na cinnost klubu.",
  },
  horseClub: {
    path: "/jezdecky-klub/",
    title: "Jezdecký klub",
    description:
      "Jezdecky klub Blind Guardians nabizi prostor pro vyuku, rozvoj jezdeckych dovednosti a bezpecny kontakt s konmi.",
  },
  ponySchool: {
    path: "/pony-skolicka/",
    title: "Pony školička",
    description:
      "Pony skolička seznamuje deti s peci o kone, zaklady jezdeni a pohybem v bezpecnem prostredi.",
  },
  hipoPraxe: {
    path: "/hiporehabilitace-praxe/",
    title: "Hiporehabilitace v pedagogické a sociální praxi",
    description:
      "Program hiporehabilitace v pedagogické a socialni praxi podporuje rozvoj deti a dospelych skrze kontakt s konem.",
  },
  hipoContact: {
    path: "/hyporehabilitace-kontakt/",
    title: "Hiporehabilitace v kontaktní terapii",
    description:
      "Prehled sluzby hiporehabilitace v kontaktni terapii a jejiho prinosu pro klienty Blind Guardians.",
  },
  paraRiding: {
    path: "/para-jezdectvi/",
    title: "Parajezdectví",
    description:
      "Parajezdectvi v Blind Guardians podporuje sportovni i terapeuticke zapojeni jezdcu se specifickymi potrebami.",
  },
} satisfies Record<string, PageSeo>;
