import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import markdoc from "@astrojs/markdoc";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import { SITE_URL } from "./src/constants/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  output: "hybrid",
  adapter: cloudflare(),
  integrations: [tailwind(), sitemap(), robotsTxt(), markdoc(), react()],
  vite: {
    define: {
      "process.env.KEYSTATIC_GITHUB_CLIENT_ID": JSON.stringify(process.env.KEYSTATIC_GITHUB_CLIENT_ID),
      "process.env.KEYSTATIC_GITHUB_CLIENT_SECRET": JSON.stringify(process.env.KEYSTATIC_GITHUB_CLIENT_SECRET),
      "process.env.KEYSTATIC_SECRET": JSON.stringify(process.env.KEYSTATIC_SECRET),
      "process.env.PUBLIC_KEYSTATIC_GITHUB_APP_SLUG": JSON.stringify(process.env.PUBLIC_KEYSTATIC_GITHUB_APP_SLUG),

      "import.meta.env.KEYSTATIC_GITHUB_CLIENT_ID": JSON.stringify(process.env.KEYSTATIC_GITHUB_CLIENT_ID),
      "import.meta.env.KEYSTATIC_GITHUB_CLIENT_SECRET": JSON.stringify(process.env.KEYSTATIC_GITHUB_CLIENT_SECRET),
      "import.meta.env.KEYSTATIC_SECRET": JSON.stringify(process.env.KEYSTATIC_SECRET),
      "import.meta.env.PUBLIC_KEYSTATIC_GITHUB_APP_SLUG": JSON.stringify(process.env.PUBLIC_KEYSTATIC_GITHUB_APP_SLUG),
    }
  }
});

