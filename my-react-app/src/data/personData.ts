interface Person {
  name: string;
  text: string;
  imgPicture: string;
}

const PersonData: Person[] = [
  {
    name: "Bc. Jana Pospíšilová",
    text: `od roku 2004 je držitelem ČJF licence instruktora jezdectví a\u00A0věnuje se
          jezdeckému výcviku a sportovní přípravě dětí a\u00A0mládeže, od roku 2009 se\u00A0angažuje jako asistent a\u00A0instruktor výcviku koní v\u00A0hiporehabilitaci - od té doby je
          i\u00A0individuálním členem ČHS a od roku 2024 členem pracovní skupiny
          Hiporehabilitace v\u00A0kontaktní terapii. Od roku 2024 je též certifikovaným
          rozhodčím pro disciplíny parkur, skok mohutnosti a\u00A0drezura pod Českou hobby
          horsingovou asociací a trenérsky vede sportovní kroužek hobby horsingu. Od
          roku 2025 je aktivní i v oblasti parajezdectví – věnuje se výcviku a přípravě koní
          a\u00A0jezdců pro paradrezurní sport.`,
    imgPicture: "JanaPospisilova.jpg",
  },

  {
    name: "Bc. Eva Kolegarová, DiS",
    text: `již od dětských let se věnuje práci a aktivitám především se zdravotně
            znevýhodněnou mládeží, během studií se začala věnovat zooterapeutickým
            aktivitám včetně hiporehabilitace, má bohaté zkušenosti z fungování a praxi v
            mnoha hiporehabilitačních střediscích po celé ČR. Profesně se věnuje sociální
            práci s\u00A0různými cílovými skupinami, ve volném čase působí jako jedna z
            vedoucích 8. Přední hlídky Royal Rangers - Zlín. V roce 2024 úspěšně dokončila
            specializační kurz ČHS a stala se certifikovanou instruktorkou pro
            hiporehabilitaci v pedagogické a sociální práci pro ČR.`,
    imgPicture: "Evca003.jpg",
  },
  {
    name: "Petra Luzarová, DiS",
    text: "má dlouholeté zkušenosti s prací s dětmi a mládeží coby vedoucí vodáckého skautského spolku Poseidon. V letech 2010-2011 pracovala mj. jako asistent při hiporehabilitacích v areálu Dětského ranče Hlučín. Aktuálně se zaměřuje zejména na vozatajské aktivity s poníky, je hlavním mentorem v přípravě práce na ruce na oprati a\u00A0přípravě na zápřah.",
    imgPicture: "Luzarka002.jpg",
  },
];

export default PersonData;
