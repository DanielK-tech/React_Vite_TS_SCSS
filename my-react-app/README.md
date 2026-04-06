# Blind Guardians Web

Staticky web pro spolek Blind Guardians postaveny na Astro 6 s React komponentami a SCSS styly. Web kombinuje:

- staticke Astro routy a layouty
- React islandy pro interaktivni casti stranky
- PHP backend pro kontaktni formular
- verejne assety a PDF dokumenty ve slozce `public`

Tento README ma slouzit jako onboarding pro dalsiho programatora nebo jako provozni poznamky pro budouci upravy.

## Prehled projektu

Projekt uz neni puvodni Vite SPA. Frontend byl migrovan na Astro a dnes funguje takto:

- Astro generuje stranky a SEO metadata
- React renderuje obsah jednotlivych stranek uvnitr islandu
- PHP resi odeslani kontaktniho formulare a reCAPTCHA validaci

Hlavni domena je nastavena v `astro.config.mjs` a metadata stranek jsou v `src/data/site.ts`.

## Stack

- Astro 6
- React 18
- TypeScript
- SCSS
- PHP pro formular
- Google reCAPTCHA v3

## Skripty

```bash
npm run dev
npm run build
npm run check
npm run preview
```

Co delaji:

- `npm run dev`: lokalni Astro dev server
- `npm run build`: produkcni build do `dist`
- `npm run check`: Astro a TypeScript kontrola
- `npm run preview`: lokalni preview produkcniho buildu

Po `npm run build` se automaticky vygeneruje:

- `dist/sitemap-index.xml` a `dist/sitemap-0.xml` z Astro sitemap integrace
- `dist/sitemap.xml` jako alias pro jednodussi pouziti v Google Search Console

## Struktura projektu

Nejdolezitejsi adresare a soubory:

- `src/layouts/BaseLayout.astro`: hlavni HTML layout, SEO meta, globalni shell
- `src/data/site.ts`: SEO metadata, canonical URL, nazvy stranek
- `src/data/navigation.ts`: hlavni navigace a dokumenty ke stazeni
- `src/astroPages/`: Astro stranky pro jednotlive routy
- `src/pages/`: Astro wrappery pro routy
- `src/reactPages/PageIsland.tsx`: mapovani typu stranky na konkretni React view
- `src/reactPages/views/`: obsah jednotlivych stranek v Reactu
- `src/components/`: sdilene komponenty jako header, footer, menu, dialogy
- `src/styles/`: SCSS styly
- `public/`: verejne assety kopirovane 1:1 do buildu
- `public/pdf/`: PDF dokumenty ke stazeni
- `contact.php`: backend endpoint pro formular
- `reCaptcha.php`: helper pro validaci reCAPTCHA a nacitani konfigurace

## Jak je frontend postaveny

Render stranek funguje ve trech vrstvach:

1. Routa v `src/pages/*.astro`
2. Obsah Astro stranky v `src/astroPages/*.astro`
3. React view v `src/reactPages/views/*.tsx`

Priklad toku pro kontakt:

1. `src/pages/contact.astro`
2. `src/astroPages/contact.astro`
3. `src/reactPages/PageShell.astro`
4. `src/reactPages/PageIsland.tsx`
5. `src/reactPages/views/ContactView.tsx`

Sdileny obal stranky resi `src/components/AppLayout.tsx`, kde se skladaji header, footer, promo sekce a hlavni obsah.

## Lokalni vyvoj

Frontend spustim takto:

```bash
npm install
npm run dev
```

Vychozi lokalni URL je typicky:

```text
http://localhost:4321/
```

Pokud menim hodnoty v `.env`, je potreba restartovat Astro dev server.

## Kontaktni formular

Kontaktni formular ma dve casti:

- frontend v `src/reactPages/views/ContactView.tsx`
- backend v `contact.php`

Frontend vola endpoint definovany pres `PUBLIC_CONTACT_ENDPOINT`.

### Doporucena konfigurace pro bezny lokalni vyvoj

Nejjednodussi a nejspolehlivejsi varianta je pouzivat pri lokalnim vyvoji produkcni PHP endpoint:

```env
PUBLIC_CONTACT_ENDPOINT=https://skblindguardians.cz/contact.php
```

To znamena:

- frontend bezi lokalne
- formular se odesila na server, ktery ma funkcni PHP, reCAPTCHA a mail

### Ciste lokalni PHP test

Pokud chci testovat i `contact.php` lokalne, nestaci jen spustit:

```bash
php -S 127.0.0.1:8000
```

Lokalni PHP musi umet:

- HTTPS volani na Google reCAPTCHA `siteverify`
- posilani mailu

Na Windows to v praxi znamena:

- aktivni `php.ini`
- povolene `curl` nebo `openssl`
- nastavene SMTP nebo mail catcher

Pokud tohle neni nastavene, lokalni `contact.php` muze vracet `502` pri reCAPTCHA overeni nebo selhat pri `mail()`.

## Konfigurace formulare a deploy

Backend potrebuje mit dostupne tyto hodnoty:

- `PUBLIC_RECAPTCHA_SITE_KEY` nebo `SITE_KEY` pro frontend
- `RECAPTCHA_SECRET_KEY` nebo `SECRET_KEY` pro `contact.php`
- `ADMIN_EMAIL` jako cilova admin adresa
- volitelne `PUBLIC_CONTACT_ENDPOINT`
- volitelne `RECAPTCHA_MIN_SCORE`
- volitelne `MAIL_FROM_ADDRESS`
- volitelne `MAIL_FROM_NAME`

Priklad je v `.env.example`:

```env
PUBLIC_RECAPTCHA_SITE_KEY=your_public_site_key
RECAPTCHA_SECRET_KEY=your_secret_key
PUBLIC_CONTACT_ENDPOINT=https://example.com/contact.php
RECAPTCHA_MIN_SCORE=0.5
ADMIN_EMAIL=kontakt@example.com
MAIL_FROM_ADDRESS=kontakt@example.com
MAIL_FROM_NAME=SK Blind Guardians
```

Nejspolehlivejsi varianty nasazeni jsou dve:

1. nastavit promenne v administraci hostingu jako serverove environment variables
2. nahrat `.env` vedle `contact.php` a `reCaptcha.php`

Pokud hosting neumi bezne `getenv()`, helper v `reCaptcha.php` zkousi i lokalni `.env` soubory.

### Chovani formulare

Po uspesnem odeslani:

- admin dostane hlavni email se zpravou
- odesilatel dostane potvrzovaci kopii zpravy

Mail je odesilan s korektnim `From` a `Reply-To`, aby server neodmital doruceni kvuli spoofingu adresy navstevnika.

## reCAPTCHA v3

Pouziva se reCAPTCHA v3. Klicove body:

- pro Google admin je potreba pridat hostname, ne cele URL
- pro produkci typicky: `skblindguardians.cz` a `www.skblindguardians.cz`
- pro lokalni test: `localhost` a `127.0.0.1`

Nepouzivat zapisy jako:

- `http://localhost:4321`
- `https://skblindguardians.cz/contact.php`

To nejsou hostname a Google je pro reCAPTCHA validaci nebere spravne.

## PDF dokumenty ke stazeni

Dokumenty pro stazeni jsou ve slozce `public/pdf` a jejich nabidka se ridi souborem `src/data/navigation.ts`.

Pri pridani noveho PDF postupuji takto:

1. nahraju soubor do `public/pdf`
2. pro produkcni server pouziju bezpecny ASCII nazev souboru bez diakritiky, bez mezer a bez specialnich znaku
3. do `src/data/navigation.ts` pridam novou polozku do pole `documents`
4. spustim `npm run build`
5. po nasazeni overim stazeni primo na produkcnim serveru

### Dulezite pravidlo pro nazvy souboru

Na hostingu se ukazalo, ze soubory s diakritikou, mezerami nebo ruznou Unicode normalizaci mohou na produkci selhat, i kdyz na localhostu funguji.

Proto je doporuceny format nazvu souboru napr.:

- `vyrocni-zprava-sk-blind-guardians-2025.pdf`
- `chovatelsky-krouzek-uvodni-instrukce.pdf`
- `pony-skolicka-uvodni-instrukce.pdf`

Nedoporuceny format:

- `výroční zpráva 2024.pdf`
- `chovatelský kroužek - úvodní instrukce.pdf`

Uzivatelsky privetivy cesky nazev ma byt v `label`, ne v realnem nazvu souboru.

## Sitemap a Google Search Console

Sitemap se generuje automaticky z Astro rout pri buildu. Produkcni URL pro odeslani do Google Search Console je:

```text
https://skblindguardians.cz/sitemap.xml
```

Interne Astro vytvori `sitemap-index.xml`, ale build navic vytvori i alias `sitemap.xml`, aby se dal snadno pouzit v `robots.txt` i v Search Console.

Doporuceny postup po nasazeni:

1. spustit `npm run build`
2. nasadit obsah `dist` na produkci
3. overit v prohlizeci `https://skblindguardians.cz/sitemap.xml`
4. v Google Search Console otevrit sekci Sitemaps a vlozit `sitemap.xml`

### Jak zapsat dokument do navigation.ts

Pokud je soubor pojmenovany jako slug bez diakritiky, preferovana varianta je `createPdfDocument`:

```ts
createPdfDocument({
  slug: "vyrocni-zprava-sk-blind-guardians-2025",
  label: "Vyrocni zprava SK Blind Guardians 2025",
  description: "PDF dokument ulozeny ve verejne slozce webu.",
  fileName: "Vyrocni-zprava-SK-Blind-Guardians-2025.pdf",
});
```

To vytvori odkaz `/pdf/vyrocni-zprava-sk-blind-guardians-2025.pdf`.

Pokud je nutne zachovat presny nazev souboru v `public/pdf`, lze pouzit `createPublicPdfDocument`:

```ts
createPublicPdfDocument({
  publicFileName: "chovatelsky-krouzek-uvodni-instrukce.pdf",
  label: "Chovatelsky krouzek - uvodni instrukce",
  description: "PDF dokument ulozeny ve verejne slozce webu.",
});
```

### Doporuceni pro spravu souboru

- pokud dostanu PDF s diakritikou nebo mezerami v nazvu, vytvorim jeho ASCII kopii a na webu odkazuji na ni
- pokud existuji dve varianty stejneho souboru, necham jen jednu produkcni verzi
- po kazde zmene dokumentu zkontroluji stazeni primo na produkci, nejen na localhostu

## Casti, ktere se upravuji nejcasteji

Typicke editacni body:

- `src/data/site.ts`: SEO texty, canonical URL, titulky stranek
- `src/data/navigation.ts`: menu a dokumenty ke stazeni
- `src/reactPages/views/*.tsx`: obsah stranek
- `src/styles/*.scss`: vizualni upravy
- `public/pdf`: PDF dokumenty
- `contact.php`: chovani formularu a mailu

## Poznamka k build warningum

Pri `npm run build` se mohou zobrazovat warningy o nepodporovanych `.tsx` souborech ve `src/pages`. To jsou starsi zbytky po migraci z puvodni SPA a nejsou soucasti aktivnich Astro rout.

Pokud se nekdy bude delat vetsi uklid repozitare, je vhodne je bud odstranit, nebo prejmenovat tak, aby Astro nebral jejich pritomnost jako upozorneni.

## Doporuceny postup pri zmene

Pri kazde bezne uprave drzim tento postup:

1. zmenit data nebo komponentu
2. spustit `npm run check`
3. spustit `npm run build`
4. otestovat zmenenou cast v browseru
5. pokud jde o formular nebo PDF, otestovat i na produkci
