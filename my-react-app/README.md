# Blind Guardians Web

## Deployment Config

Kontaktni formular na serveru potrebuje mit dostupne tyto hodnoty:

- `PUBLIC_RECAPTCHA_SITE_KEY` nebo `SITE_KEY` pro frontend
- `RECAPTCHA_SECRET_KEY` nebo `SECRET_KEY` pro `contact.php`
- povinne `ADMIN_EMAIL`
- volitelne `RECAPTCHA_MIN_SCORE`, `MAIL_FROM_ADDRESS`, `MAIL_FROM_NAME`

Nejspolehlivejsi varianty pro nasazeni jsou dve:

1. Nastavit promenne v administraci hostingu jako serverove environment variables.
2. Nahrat soubor `.env` vedle `contact.php` a `reCaptcha.php`.

Pokud server neumi predavat hodnoty pres `getenv()`, backend ted zkousi i `$_ENV`, `$_SERVER`, `REDIRECT_*` a lokalni `.env` nebo `.env.local`.

`ADMIN_EMAIL` uz nema zadny fallback v kodu. Pokud chybi, backend vrati chybu konfigurace misto toho, aby pouzil natvrdo zapsanou adresu z repozitare.

Priklad je v souboru `.env.example`.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
