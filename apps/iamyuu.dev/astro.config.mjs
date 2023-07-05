import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import cloudflare from '@astrojs/cloudflare';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import { SITE_URL } from './src/consts';

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	output: 'server',
	// https://docs.astro.build/en/guides/integrations-guide/cloudflare
	adapter: cloudflare(),
	integrations: [
		// https://docs.astro.build/en/guides/integrations-guide/sitemap
		sitemap(),

		// https://unocss.dev/integrations/astro
		UnoCSS({
			injectReset: true,
		}),

		// https://docs.astro.build/en/guides/integrations-guide/markdoc
		markdoc(),

		// https://docs.astro.build/en/guides/integrations-guide/react
		react(),
	],
});
