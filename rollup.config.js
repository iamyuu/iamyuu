import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from '@rollup/plugin-babel';
import yaml from '@rollup/plugin-yaml';
import { terser } from 'rollup-plugin-terser';
import { mdsvex } from 'mdsvex';
import image from 'svelte-image';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';
import defaultTheme from 'tailwindcss/defaultTheme';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
  (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
  (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);

const extensions = ['.svelte', '.svx'];

const svelteImageOptions = {
  placeholder: 'trace',
  trace: {
    threshold: 120,
    color: defaultTheme.colors.gray[900],
    background: defaultTheme.colors.gray[200]
  }
};

const mdsvexOptions = {
  layout: {
    _: './src/layouts/default.svelte',
    post: './src/layouts/post.svelte'
  }
};

const sveltePreprocess = require('svelte-preprocess')({
  postcss: true,
  defaults: {
    style: 'postcss'
  }
});

const svelteOptions = {
  dev,
  extensions,
  hydratable: true,
  preprocess: [sveltePreprocess, mdsvex(mdsvexOptions), image(svelteImageOptions)]
};

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      svelte({
        emitCss: true,
        ...svelteOptions
      }),
      resolve({
        browser: true,
        dedupe: ['svelte']
      }),
      commonjs(),
      yaml(),

      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', ...extensions],
          babelHelpers: 'runtime',
          exclude: ['node_modules/@babel/**'],
          presets: [
            [
              '@babel/preset-env',
              {
                targets: '> 0.25%, not dead'
              }
            ]
          ],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true
              }
            ]
          ]
        }),

      !dev &&
        terser({
          module: true
        })
    ],

    preserveEntrySignatures: false,
    onwarn
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      svelte({
        generate: 'ssr',
        ...svelteOptions
      }),
      resolve({
        dedupe: ['svelte']
      }),
      commonjs(),
      yaml()
    ],
    external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),

    preserveEntrySignatures: 'strict',
    onwarn
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode)
      }),
      commonjs(),
      !dev && terser()
    ],

    preserveEntrySignatures: false,
    onwarn
  }
};
