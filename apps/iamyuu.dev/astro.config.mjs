import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import UnoCSS from 'unocss/astro';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	site: 'https://iamyuu.dev',
	output: 'server',
	integrations: [
		// https://docs.astro.build/en/guides/integrations-guide/sitemap
		sitemap(),

		// https://unocss.dev/integrations/astro
		UnoCSS({
			injectReset: true,
		}),
	],
	// https://docs.astro.build/en/guides/integrations-guide/cloudflare
	adapter: cloudflare(),
});
