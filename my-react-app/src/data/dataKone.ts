// Definice rozhraní pro typ koně

interface Horse {
  name: string;
  origin: string;
  born: string;
  breeder: string;
  owner: string;
  description: string;
  imageName: string;
}

const horse: Horse[] = [
  {
    name: "AZALEYA",
    origin: "Anglický plnokrevník, klisna",
    born: "7.4.2014, Matka: Auenwunder (po Seattle Dancer(USA)), Otec: Calming Influence(IRE)",
    breeder: "Maag Reinhard",
    owner: "Lucie Honsová",
    description: `Klisna s dostihovou minulostí, působila část života jako školní kůň na turistické jízdárně. Je
                  to nesmírně pracovité a charakterní zvíře. V terénu umí výrazně projevit svůj plnokrevný
                  temperament, ale na jízdárně funguje jako vzorná učitelka. Na lonži je ideálním výukovým
                  koněm pro začátečníky i profesorka pro pokročilejší či ambicióznější samostatně jezdící.
                  Ráda i skáče. Klisna je charakterní a k lidem přátelská. V roce 2024 bohužel utrpěla
                  nepříjemný úraz, který ji esteticky poznamenal a na delší dobu vyřadil z práce. Aktuálně je
                  opět v postupném zatěžovacím procesu a pokud vše zdravotně a charakterně ustojí je v
                  plánu s ní absolvovat specializační zkoušky koní pro hiporehabilitaci v pedagogické a
                  sociální praxi.`,
    imageName: "Azazela001.jpg",
  },
  {
    name: "HONZÍK",
    origin: "Pony valach",
    born: "1.1.2002",
    breeder: "Jana Pospíšilová",
    owner: "Jana Pospíšilová",
    description: `Přes svoje roky má energie na rozdávání i mladším. Je to velmi hodný, kontaktní a přátelský
                  poník. Co se týká opečovávání je bezpečný pro nejmenší a nemá problém ani s
                  kompenzačními pomůckami zdravotně znevýhodněných. Na ruce má pořád páru, je oblíbený
                  jako parťák do in-hand speciálních výstavních tříd hlavně u pokročilejších nebo větších dětí,
                  kdy pro jeho drive není potřeba ho příliš přemlouvat k rychlejšímu pohybu. Skvělý charakter
                  prokázal s nejmenšími svěřenci i v sedlových disciplínách. Je zatahaný, účastnil se
                  opraťových soutěží. Pod sedlem je spolehlivý a bezpečný - pokročilejší děti ho v lotu
                  zvládnou i samostatně, s vodičem je vítanou posilou pony školky. Je to takový králík
                  Energizer, zároveň se ale umí hodit i do vyklidněného pohodového módu v rámci kontaktní
                  terapie. V\u00A0roce 2025 úspěšně absolvoval specializační zkoušky České hiporehabilitační

                  společnosti pro koně a pony v hiporehabilitaci a získal licenci pro působení v\u00A0oborech -
                  Hiporehabilitace v pedagogické a sociální praxi (HPSP) a v kontaktní terapii (KT).`,
    imageName: "BHonza001.jpg",
  },
  {
    name: "LATNEY MIN GRACIE",
    origin: "Angloarab, klisna",
    born: "22.5.2003, Matka: Luty (po Agadir), Otec: Gazal-I",
    breeder: "Jana Nováková",
    owner: "Lucie Honsová",
    description: `Starší klisna byla zakoupena jako klidná učitelka pro juniory. V předchozích letech působila
        především jako kočárový kůň ve valticko-lednickém areálu. Je velice charakterní, spolehlivá
        a klidná. Vzhledem k životním zkušenostem zvládá klisna skvěle práci na oprati a vedení na
        dvou lonžích. Pro výborný charakter a letité matadorské zkušenosti jsme chtěli klisnu
        otestovat i v hiporehabilitačním provozu a v\u00A0roce 2025 jí přihlásili ke specializačním
        zkouškám ČHS pro koně zařazené do hiporehabilitace. Bylo v\u00A0plánu klisnu licentovat pro
        HPSP, bohužel se v\u00A0sezóně objevily potíže s\u00A0dušností, kterou klisna údajně již nějaký čas
        trpí a tak jsme ji ze zkoušek museli stáhnout. Prozatím tedy funguje s\u00A0ohledem na aktuální
        zdravotní stav jako vycházkový rekreační koník.`,
    imageName: "Clatney001.jpg",
  },
  {
    name: "ZAJEČICE",
    origin: "Pony klisna",
    born: "5.2.2007",
    breeder: "Ing. Kateřina Pánková",
    owner: "Jana Pospíšilová",
    description: `Menší ponička s překvapivě citlivou duší. Je nedílnou oporou čtvernohého týmu při pony
        školce a\u00A0trpělivou učitelkou začínajících malých rajťáků. Má velkou snahu vyhovět
        požadavkům, narozdíl od většiny ostatních poníků jí zpravidla k záludnostem nezláká ani
        pastva. Je pravidelnou a úspěšnou účastnicí a parťačkou dětí při speciálních výstavních
        třídách, jak při disciplínách na ruce tak i v sedle. Svou mírnou povahu prokázala i při práci se
        zdravotně znevýhodněnými, kdy ochotně následuje a plní požadavky svého vodiče i v
        případě, že k pohybu potřebuje kompenzační pomůcky. V\u00A0roce 2025 absolvovala
        specializační zkoušky České hiporehabilitační společnosti pro koně a pony zařazené v
        hiporehabilitaci a získala licenci pro působení v\u00A0oboru Hiporehabilitace v pedagogické a
        sociální praxi (HPSP).`,
    imageName: "Dajic003.jpg",
  },
  {
    name: "LORD NACHOS",
    origin: "Český teplokrevník, valach",
    born: "7.5.2010, Matka: Samanta (po Topas-8), Otec: Lord Caletto",
    breeder: "David Krejčí",
    owner: "Jana Pospíšilová",
    description: `Jednooký valach se skokovým původem a dobrou mechanikou pohybu je sice velký milovník
        lidí, ale není na ježdění úplně jednoduchý. Pár odvážlivců už nehezky vyškolil, pro školní
        účely ho již raději nevyužíváme. Má rád dlouhé klidné vyjížďky do terénu, zvládá základy
        práce na oprati, se slepým Miradorem vytvořili silnou dvojici a stal se tak jeho očima,
        respektive okem. V\u00A0sezónně 2025 se bohužel objevily chronické zdravotní potíže
        pohybového aparátu a tak valach zůstává s\u00A0přihlédnutím k\u00A0aktuálnímu stavu jen jako mazel a
        soukromé „terénní vozítko“.`,
    imageName: "ENachos005.jpg",
  },
  {
    name: "LOUIS",
    origin: "Welsh-part-bred valach",
    born: "15.6.2018",
    breeder: "Bohumil Kortus",
    owner: "Martin Chromčák",
    description: `Mladý pony valach byl připravovaný pro sportovní skokovou kariéru, bohužel se u něj
        projevila dušnost a sportovní kariéru mu ukončila. Neměl bohužel štěstí na nové majitele a
        veškerá jezdecká příprava z minula tak šla trochu &quot;do kytek&quot;. V současné době je v procesu
        reobsedání, získává pod sedlem znovu důvěru k lidem. Naštěstí má pozitivní vztah k dětem
        a je citlivý a pozorný při základní manipulaci na ruce. S\u00A0aktuálními majiteli se od sezóny 2025
        zúčastňuje in-hand a speciálních výstavních tříd. Chodí i na oprati a je připravován pro
        vozatajský výcvik. Do budoucna nevylučujeme ani jeho přípravu pro hiporehabilitační
        činnost. Podobně jako Zaječice je úžasně citlivý na osobní prostor a manipulaci na ruce. Již
        nyní ho využíváme v\u00A0chovatelském kroužku k\u00A0výuce nesmělejších dětí ohledně zacházení a
        vedení koně na ruce a tak by se v\u00A0této problematice určitě časem uplatnil i v\u00A0rámci HPSP.`,
    imageName: "Fluis01.jpg",
  },
  {
    name: "MIRADOR",
    origin: "Anglický plnokrevník, valach",
    born: "28.4.2008, Matka: Marea (po Vilnius), Otec: Jape (USA)",
    breeder: "SK Krasné",
    owner: "Jana Pospíšilová",
    description: `Miradora jsme získali od bývalých majitelů jako nechtěnou přítěž poté, co v důsledku tzv.
                  měsíční slepoty přišel o zrak v obou očích. I přes svůj handicap je to neskutečně charakterní
                  zvíře, které se nakonec v našem prostředí velmi dobře adaptovalo. Mirador je nenahraditelný
                  spolehlivý učitel pro začínající jezdce, zejména bázlivější děti a mládež. Za vodícím koněm
                  spolehlivě proveze známým terénem i začátečníky. Dokázal nám, že nemá problém se
                  sehrát i se zdravotně znevýhodněnými jezdci a že by mohl být i skvělým paradrezurním
                  koněm. Před oslepnutím byl dobře přiježděn i zaskákán, pod pokročilejšími jezdci se stále
                  rád i přes svůj handicap nechá přesvědčit i k rychlejšímu tempu a drezurní práci.`,
    imageName: "GMirador002.jpg",
  },

  {
    name: "TORMAX DRAGO",
    origin: "Shetland pony, plemenný hřebec",
    born: "23.5.2019, Matka: Aaltje V.Stal V.Poolland, Otec: Tornado V.D.Koerberg",
    breeder: "Šárka Soušková (Hřebčín Drago)",
    owner: "Petra Luzarová",
    description: `Mladý hřebec v základním výcviku. Je obsednutý s pomocí dětí, bohužel absence zkušeného
                  dětského jezdce neumožňuje rozvíjet plně jeho potenciál pod sedlem (hřebec například
                  vyniká dobrým stylem a silou skoku), takže pokročilejší děti zatím jen vozí pod dozorem v
                  terénu nebo na lonži. Jinak se s ním majitelka věnuje vozatajské přípravě. Je to úspěšný
                  účastník výstav a speciálních výstavních tříd právě v opraťových disciplínách. V roce 2023
                  byl úspěšně licentován a působí v přirozené plemenitbě pro klisny plemene shetland.`,
    imageName: "Hrago001.jpg",
  },
  {
    name: "SILVA",
    origin: "Teplokrevná klisna",
    born: "5.6.2014",
    breeder: "SK Blind Guardians",
    owner: "SK Blind Guardians",
    description: `Silvu, které se údajně už neřekne jinak než Sindy, jsme jako klub přijali začátkem roku 2025.
        Její majitelka se dostala do tíživé osobní situace a nebyla schopná klisně zajistit vhodný
        management. Klisna trpí v důsledku onemocnění leptospirózou tzv. měsíční slepotou,
        chorobou způsobující dočasnou až trvalou ztrátu zraku. V\u00A0dubnu 2025 jsme klisně museli
        nechat odstranit levé oko postižené glaukomem, pravé je údajně „mrtvé“ a případné zbytky
        zraku jsou tak minimální. I přesto je klisna velmi charakterní, jak na veškeré ošetřování, tak i
        pod sedlem. Adaptovala se dobře ve stádě se slepým Miradorem a poloslepým Nachosem.
        Otestovali jsme ji na lonži pod začátečníky, velmi pěkně a temperamentně se hýbe na
        jízdárně i s\u00A0pokročilejšími. Jeví se prozatím slibně jako další adept pro drezurní přípravu,
        časem by snad mohla sekundovat Miradorovi i při formování parajezdců. Přes svůj handicap
        se už v\u00A0sezóně 2025 skvěle popasovala i s\u00A0vožením klientů na obecních akcích.`,
    imageName: "Silva001.jpg",
  },
  {
    name: "Marlot V.D. Ebenvelt",
    origin: "Shetland pony",
    born: "15.5.2018, Matka: Debby v. Stal Evenbelt, Otec: Velvet v.d. Colorstable",
    breeder: "G.J. Rechterschot",
    owner: "Petra Luzarová",
    description: `Mladá ponička přibyla ve stáji v\u00A0polovině roku 2025 původně na zkoušku kvůli managementu
                  po prodělaném schvácení kopyt. Současné majitelce byla věnována poté, co se ukázalo, že
                  zdejší prostřední a individuální péče těmto jejím problémům svědčí a že při dodržení jistých
                  výživových a kopytářských pravidel je velká šance na její normální fungování. Klisna je velmi
                  charakterní a vyrovnané povahy, takže velmi záhy po zlepšení zdravotního stavu u nás bylo
                  rozhodnuto, že ji zkusíme otestovat i v\u00A0hiporehabilitačním provozu. V\u00A0roce 2025 úspěšně
                  absolvovala specializační zkoušky České hiporehabilitační společnosti pro koně a pony v
                  hiporehabilitaci a získala licenci pro působení v\u00A0oborech - Hiporehabilitace v pedagogické a\u00A0sociální praxi (HPSP) a v kontaktní terapii (KT).`,
    imageName: "Marlot001.jpg",
  },
  {
    name: "Mája",
    origin: "pony klisna",
    born: "4.10.2018",
    breeder: "",
    owner: "Veronika Nováková",
    description: `Mája byla našemu spolku zapůjčena již v\u00A0roce 2024, kdy zde byla na připuštění a majitelka
                  pro ni neměla doma využití. Klisnu jsme pro její charakter zapojili především do dění pony
                  školky, kde prokázala své kvality a také s\u00A0našimi malými členy do speciálních výstavních tříd,
                  kde předvádí stabilní výkony na ruce, pod sedlem a také na oprati. Z důvodu gravidity u nás
                  v\u00A0zápřeži trénována nebyla, v\u00A0dubnu 2025 bohužel porodila mrtvou klisničku po našem
                  plemeníkovi Tormax Drago. Od května 2025 je znovu u nás – majitelka jí zapůjčila pro naše
                  aktivity. Podařilo se jí navíc i zatahat a jako náhradnici za zdravotně indisponovanou Latney
                  jsme ji přihlásili ke specializační zkoušce České hiporehabilitační společnosti pro koně a
                  pony zařazené v\u00A0hiporehabilitaci, kdy úspěšně absolvovala licentaci pro působení v\u00A0oborech
                  - Hiporehabilitace v pedagogické a sociální praxi (HPSP) a v kontaktní terapii (KT).`,
    imageName: "Maja001.jpg",
  },
];

export default horse;
