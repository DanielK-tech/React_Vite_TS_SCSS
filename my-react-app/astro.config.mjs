import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://skblindguardians.cz",
  trailingSlash: "always",
  integrations: [react(), sitemap()],
});