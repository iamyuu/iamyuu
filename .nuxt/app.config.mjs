
import { updateAppConfig } from '#app'
import { defuFn } from '/Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs'

const inlineConfig = {
  "nuxt": {}
}

// Vite - webpack is handled directly in #app/config
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    updateAppConfig(newModule.default)
  })
}

import cfg0 from "/Users/iamyuu/dev/sandbox/iamyuu/app.config.ts"

export default /* #__PURE__ */ defuFn(cfg0, inlineConfig)
