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
  integrations: [tailwind(), sitemap(), robotsTxt(), markdoc(), react()]
});