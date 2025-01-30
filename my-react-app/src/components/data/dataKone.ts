// Definice rozhraní pro typ koně
interface Horse {
    name: string;
    origin: string;
    born: string;
    breeder: string;
    owner: string;
    description: string;
}

const horse: Horse[] = [ 
    {  
        name: 'AZALEYA', 
        origin: 'Anglický plnokrevník, klisna', 
        born: '7.4.2014, Matka: Auenwunder (po Seattle Dancer(USA)), Otec: Calming Influence(IRE)', 
        breeder:  'Maag Reinhard', 
        owner: 'Lucie Honsová', 
        description: 'Klisna s dostihovou minulostí, působila část života jako školní kůň na turistické jízdárně. Je to nesmírně pracovité a charakterní zvíře. V terénu umí výrazně projevit svůj plnokrevný temperament, ale na jízdárně funguje jako vzorná učitelka. Na lonži je ideálním výukovým koněm pro začátečníky i profesorka pro pokročilejší či ambicióznější samostatně jezdící. Ráda i skáče. Klisna je charakterní a k lidem přátelská. V roce 2024 bohužel utrpěla nepříjemný úraz, který ji esteticky poznamenal a na delší dobu vyřadil z práce. Aktuálně je opět v postupném zatěžovacím procesu a pokud vše zdravotně a charakterně ustojí je v plánu s ní absolvovat specializační zkoušky koní pro hiporehabilitaci v pedagogické a sociální praxi.'
    }, 
    {  
        name: 'HONZÍK', 
        origin: 'Pony valach', 
        born: '1.1.2002', 
        breeder:  'Jana Pospíšilová', 
        owner: 'Jana Pospíšilová', 
        description: 'Přes svoje roky má energie na rozdávání i mladším. Je to velmi hodný, kontaktní a přátelský poník. Co se týká opečovávání je bezpečný pro nejmenší a nemá problém ani s kompenzačními pomůckami zdravotně znevýhodněných. Na ruce má pořád páru, je oblíbený jako parťák do in-hand speciálních výstavních tříd hlavně u pokročilejších nebo větších dětí, kdy pro jeho drive není potřeba ho příliš přemlouvat k rychlejšímu pohybu. Skvělý charakter prokázal s nejmenšími svěřenci i v sedlových disciplínách. Je zatahaný, účastnil se opraťových soutěží, v následující sezóně pokud mu nadšení a zdraví vydrží chceme vyzkoušet i driving. Pod sedlem je spolehlivý a bezpečný - pokročilejší děti ho v lotu zvládnou i samostatně, s vodičem je vítanou posilou pony školky. Je to takový králík Energizer, zároveň se ale umí hodit i do vyklidněného pohodového módu v rámci kontaktní terapie. Pro letošní rok je v plánu ho přihlásit ke specializačním zkouškám koní pro hiporehabilitaci v pedagogické a sociální praxi a také pro kontaktní terapii.'
    }, 
    {  
        name: 'LATNEY MIN GRACIE', 
        origin: 'Angloarab, klisna', 
        born: '22.5.2003, Matka: Luty (po Agadir), Otec: Gazal-I', 
        breeder:  'Jana Nováková', 
        owner: 'Lucie Honsová', 
        description: 'Starší klisna byla zakoupena jako klidná učitelka pro juniory. V předchozích letech působila především jako kočárový kůň ve valticko-lednickém areálu. Přes mírnější dušnost je klisna stále v dobré kondici a zdravotním stavu. Je charakterní a klidná, umí si však své mladé jezdce dobře otestovat při samostatném vedení. Vzhledem k životním zkušenostem zvládá klisna skvěle práci na oprati a vedení na dvou lonžích. Pro výborný charakter a letité matadorské zkušenosti majitelé souhlasili otestovat klisnu i v hiporehabilitačním provozu. V letošním roce, pokud klisně vydrží dobré zdraví, je v plánu ji přihlásit ke specializačním zkouškám koní pro hiporehabilitaci v pedagogické a sociální praxi.'
    }, 
    {  
        name: 'ZAJEČICE', 
        origin: 'Pony klisna', 
        born: '5.2.2007', 
        breeder:  'Ing. Kateřina Pánková', 
        owner: 'Jana Pospíšilová', 
        description: 'Menší ponička s překvapivě citlivou duší. Je nedílnou oporou čtvernohého týmu při pony školce a trpělivou učitelkou začínajích malých rajťáků. Má velkou snahu vyhovět požadavkům, narozdíl od většiny ostatních poníků jí zpravidla k záludnostem nezláká ani pastva. Je pravidelnou a úspěšnou účastnicí a parťačkou dětí při speciálních výstavních třídách jak při disciplínách na ruce tak i v sedle. Svou mírnou povahu prokázala i při práci se zdravotně znevýhodněnými, kdy ochotně následuje a plní požadavky svého vodiče i v případě, že k pohybu potřebuje kompenzační pomůcky. V letošním roce je v plánu přihlásit ji ke specializačním zkouškám koní pro hiporehabilitaci v pedagogické a sociální praxi a také v kontaktní terapii.'
    }, 
    {  
        name: 'LORD NACHOS', 
        origin: 'Český teplokrevník, valach', 
        born: '7.5.2010, Matka: Samanta (po Topas-8), Otec: Lord Caletto', 
        breeder:  'David Krejčí', 
        owner: 'Jana Pospíšilová', 
        description: 'Jednooký valach se skokovým původem a dobrou mechanikou pohybu je sice velký milovník lidí, ale není na ježdění úplně jednoduchý. Pár odvážlivců už nehezky vyškolil, pro školní účely ho raději nevyužíváme. Má rád dlouhé klidné vyjížďky do terénu, zvláda základy práce na oprati, se slepým Miradorem vytvořili silnou dvojici a stal se tak jeho očima, respektive okem. V letošní sezóně je v plánu otestovat ho alespoň v nějakých hobby soutěžích pod zkušenějšími jezdci.'
    }, 
    {  
        name: 'LOUIS', 
        origin: 'Welsh-part-bred valach', 
        born: '15.6.2018', 
        breeder:  'Bohumil Kortus', 
        owner: 'Martin Chromčák', 
        description: 'Mladý pony valach byl připravovaný pro sportovní skokovou kariéru, bohužel se u něj projevila lehká dušnost. Neměl bohužel štěstí na nové majitele a veškerá obsedací příprava z minula tak šla trochu "do kytek". V současné době je v procesu reobsedání, získává znovu důvěru k lidem. Naštěstí má pozitivní vztah k dětem a je citlivý a pozorný při základní manipulaci na ruce. S novými malými majitelkami je v plánu s ním v letošní sezóně vyzkoušet speciální výstavní třídy in-hand a pokud se podaří zapracovat na zlomené psychice snad i nějaké jednodušší sedlové disciplíny. Do budoucna nevylučujeme ani jeho přípravu ve vozatajství.'
    }, 
    {  
        name: 'MIRADOR', 
        origin: 'Anglický plnokrevník, valach', 
        born: '28.4.2008, Matka: Marea (po Vilnius), Otec: Jape (USA)', 
        breeder:  'SK Krasné', 
        owner: 'Jana Pospíšilová', 
        description: 'Miradora jsme získali od bývalých majitelů jako nechtěnou přítěž poté co v důsledku tzv. měsíční slepoty přišel o zrak v obou očích. I přes svůj handicap je to neskutečně charakterní zvíře, které se nakonec v našem prostředí velmi dobře adaptovalo. Mirador je nenahraditelný spolehlivý učitel pro začínající jezdce, zejména bázlivější děti a mládež. Za vodícím koněm spolehlivě proveze známým terénem i začátečníky. Dokázal nám, že nemá problém se sehrát i se zdravotně znevýhodněnými jezdci a že by mohl být i skvělým paradrezurním koněm. Před oslepnutím byl dobře přiježděn i zaskákán, pod pokročilejšími jezdci se rád nechá přesvědčit i k rychlejšímu tempu a drezurní práci, v letošní sezóně máme v plánu ho pod zkušenejšími otestovat přímo na drezurním obdelníku a pokud se osvědčí, jak od něj očekáváme, bude školním drezurním koněm pro klubovou omladinu a případně také paradrezurní parťák pro pokročilejší zdravotně znevýhodněné jezdce.  '
    }, 
    {  
        name: 'SILVA', 
        origin: 'Teplokrevná klisna', 
        born: '5.6.2014', 
        breeder:  'SK Blind Guardians', 
        owner: 'SK Blind Guardians', 
        description: 'Silvu, které se údajně už neřekne jinak než Sindy jsme jako klub přijali začátkem roku 2025. Její majitelka se dostala do tíživé osobní situace a nebyla schopná klisně zajistit vhodný management. Klisna trpí v důsledku onemocnění leptospirózou tzv. měsíční slepotou, chorobou způsobující dočasnou až trvalou ztrátu zraku. Malou část zraku má zatím zachovánu, nicméně oči nejsou v optimálním stavu a klisnu musíme připravit na život v trvalé slepotě. Klisna by i přes svůj handicap měla být charakterní a plně jezdecky využitelná. Je kontaktní a přátelská i k dětem, až se adaptuje v novém prostředí budeme jí připravovat pro práci s dětmi a mládeží v jezdeckém klubu, případně i pro využití v parajezdeckém sportu pokud její povaha dovolí. '
    }, 
    {  
        name: 'SPYKE', 
        origin: 'Pony valach, ', 
        born: '2000', 
        breeder:  'Jana Pospíšilová', 
        owner: 'Jana Pospíšilová', 
        description: 'Starý matador Spyke je miláček a průvodce nejmenších začínajích koňařů. Je duší  pony školky - klidný a bezpečný pro děti všech věkových kategorií. Starého pána jen tak něco nevyvede z míry, bez problémů zvládá vozíky a další kompenzační pomůcky zdravotně znevýhodněných, trpělivě snáší kontakt i pokusy o péči. Pokud zdravotní stav dovolí rádi bychom ho v letošním roce přihlásili ke specializačním zkouškám koní pro hiporehabilitaci v kontaktní terapii.'
    }, 
    {  
        name: 'TORMAX DRAGO', 
        origin: 'Shetland pony, plemenný hřebec', 
        born: '23.5.2019, Matka: Aaltje V.Stal V.Poolland, Otec: Tornado V.D.Koerberg', 
        breeder:  'Šárka Soušková (Hřebčín Drago)', 
        owner: 'Petra Luzarová', 
        description: 'Mladý hřebec v základním výcviku. Je obsednutý s pomocí dětí, bohužel absence zkušeného dětského jezdce neumožňuje rozvíjet plně jeho potenciál pod sedlem (hřebec například vyniká dobrým stylem a silou skoku), takže pokročilejší děti zatím jen vozí pod dozorem v terénu nebo na lonži. Jinak se s ním majitelka věnuje vozatajské přípravě. Je to úspěšný účastník výstav a speciálních výstavních tříd právě v opraťových disciplínách. V roce 2023 byl úspěšně licentován a působí v přirozené plemenitbě pro klisny plemene shetland. '
    },

] 


export default horse;