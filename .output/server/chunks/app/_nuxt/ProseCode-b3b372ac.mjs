import { _ as _export_sfc, n as useAppConfig, p as __nuxt_component_1$1 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { useClipboard, onClickOutside } from '@vueuse/core';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'shikiji';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'unist-util-visit';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'nanoid';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProseCodeCopyButton",
  __ssrInlineRender: true,
  props: {
    content: {
      type: String,
      default: ""
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const copyButtonRef = ref();
    useClipboard();
    onClickOutside(copyButtonRef, () => {
      if (state.value === "copied") {
        state.value = "init";
      }
    });
    const { prose } = useAppConfig();
    const state = ref("init");
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_Icon = __nuxt_component_1$1;
      _push(`<button${ssrRenderAttrs(mergeProps({
        ref_key: "copyButtonRef",
        ref: copyButtonRef,
        class: [(__props.show || state.value === "copied") && "show"]
      }, _attrs))} data-v-d1891d80><span class="sr-only" data-v-d1891d80>Copy to clipboard</span><span class="icon-wrapper" data-v-d1891d80>`);
      if (state.value === "copied") {
        _push(ssrRenderComponent(_component_Icon, {
          name: (_a = unref(prose).copyButton) == null ? void 0 : _a.iconCopied,
          size: "18",
          class: "copied"
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_Icon, {
          name: (_b = unref(prose).copyButton) == null ? void 0 : _b.iconCopy,
          size: "18"
        }, null, _parent));
      }
      _push(`</span></button>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt-themes+typography@0.11.0_postcss@8.4.31_rollup@3.29.4_vue@3.3.4/node_modules/@nuxt-themes/typography/components/ProseCodeCopyButton.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d1891d80"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseCode",
  __ssrInlineRender: true,
  props: {
    code: {
      type: String,
      default: ""
    },
    language: {
      type: String,
      default: null
    },
    filename: {
      type: String,
      default: null
    },
    highlights: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const hovered = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProseCodeCopyButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [[`highlight-${__props.language}`], "prose-code"]
      }, _attrs))} data-v-1e125056>`);
      if (__props.filename) {
        _push(`<span class="filename" data-v-1e125056>${ssrInterpolate(__props.filename)}</span>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_ProseCodeCopyButton, {
        show: hovered.value,
        content: __props.code,
        class: "copy-button"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt-themes+typography@0.11.0_postcss@8.4.31_rollup@3.29.4_vue@3.3.4/node_modules/@nuxt-themes/typography/components/global/ProseCode.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1e125056"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=ProseCode-b3b372ac.mjs.map
