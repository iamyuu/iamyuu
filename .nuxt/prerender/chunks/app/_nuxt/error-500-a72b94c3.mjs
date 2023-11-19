import { _ as _export_sfc, a as useHead } from '../server.mjs';
import { mergeProps, useSSRContext } from 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/vue@3.3.4/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrInterpolate } from 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/vue@3.3.4/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/ofetch@1.3.3/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/hookable@5.5.3/node_modules/hookable/dist/index.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/unctx@2.3.1/node_modules/unctx/dist/index.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/unhead@1.7.4/node_modules/unhead/dist/index.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/@unhead+shared@1.7.4/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/ufo@1.3.1/node_modules/ufo/dist/index.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/h3@1.8.2/node_modules/h3/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/node-fetch-native@1.4.0/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/destr@2.0.1/node_modules/destr/dist/index.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/unenv@1.7.4/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/scule@1.0.0/node_modules/scule/dist/index.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/klona@2.0.6/node_modules/klona/dist/index.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/defu@6.1.2/node_modules/defu/dist/defu.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/ohash@1.1.3/node_modules/ohash/dist/index.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/unstorage@1.9.0/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/unstorage@1.9.0/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/unstorage@1.9.0/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/unstorage@1.9.0/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/unstorage@1.9.0/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/radix3@1.1.0/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/iamyuu/dev/sandbox/iamyuu/node_modules/.pnpm/pathe@1.1.1/node_modules/pathe/dist/index.mjs';

const _sfc_main = {
  __name: "error-500",
  __ssrInlineRender: true,
  props: {
    appName: {
      type: String,
      default: "Nuxt"
    },
    version: {
      type: String,
      default: ""
    },
    statusCode: {
      type: Number,
      default: 500
    },
    statusMessage: {
      type: String,
      default: "Server error"
    },
    description: {
      type: String,
      default: "This page is temporarily unavailable."
    }
  },
  setup(__props) {
    const props = __props;
    useHead({
      title: `${props.statusCode} - ${props.statusMessage} | ${props.appName}`,
      script: [],
      style: [
        {
          children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e0e0e0}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p{margin:0}h1{font-size:inherit;font-weight:inherit}`
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden" }, _attrs))} data-v-b86faff8><div class="fixed -bottom-1/2 left-0 right-0 h-1/2 spotlight" data-v-b86faff8></div><div class="max-w-520px text-center" data-v-b86faff8><h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-b86faff8>${ssrInterpolate(__props.statusCode)}</h1><p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-b86faff8>${ssrInterpolate(__props.description)}</p></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt+ui-templates@1.3.1/node_modules/@nuxt/ui-templates/dist/templates/error-500.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error500 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b86faff8"]]);

export { error500 as default };
//# sourceMappingURL=error-500-a72b94c3.mjs.map
