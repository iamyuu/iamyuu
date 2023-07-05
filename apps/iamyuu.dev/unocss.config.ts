import { defineConfig, presetUno, presetWebFonts, presetIcons, presetTypography, transformerVariantGroup, transformerDirectives } from 'unocss';

// https://unocss.dev/config/
export default defineConfig({
	rules: [
		[
			/^grid-cols-auto-w-(\d+)$/,
			([, val]) => ({
				'grid-template-columns': `repeat(auto-fill, minmax(${parseInt(val) / 4}rem, 1fr))`,
			}),
		],
	],

	presets: [
		// https://unocss.dev/presets/uno#options
		presetUno({
			preflight: true,
		}),

		// https://unocss.dev/presets/icons#options
		presetIcons(),

		// https://unocss.dev/presets/typography#options
		presetTypography(),

		// https://unocss.dev/presets/web-fonts#options
		presetWebFonts({
			provider: 'fontshare',
			fonts: {
				sans: 'Satoshi',
				mono: 'JetBrains Mono',
			},
		}),
	],

	transformers: [
		// https://unocss.dev/transformers/variant-group
		transformerVariantGroup(),

		// https://unocss.dev/transformers/directives
		transformerDirectives(),
	],
});
