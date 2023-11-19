import { useSSRContext, defineComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Input",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: String,
      required: true
    },
    field: {
      type: Object,
      required: true,
      validator: (value) => {
        if (!value.name) {
          return false;
        }
        return true;
      }
    }
  },
  emits: ["update:modelValue"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-dfc10149><label${ssrRenderAttr("for", __props.field.name)} data-v-dfc10149>${ssrInterpolate(__props.field.label)}</label>`);
      if (__props.field.type !== "textarea") {
        _push(`<input${ssrRenderAttr("id", __props.field.name)}${ssrRenderAttr("name", __props.field.name)}${ssrRenderAttr("value", __props.modelValue)}${ssrRenderAttr("type", __props.field.type ? __props.field.type : "text")}${ssrRenderAttr("placeholder", __props.field.placeholder ? __props.field.placeholder : "")} data-v-dfc10149>`);
      } else {
        _push(`<textarea${ssrRenderAttr("id", __props.field.name)}${ssrRenderAttr("name", __props.field.name)}${ssrRenderAttr("type", __props.field.type ? __props.field.type : "text")}${ssrRenderAttr("placeholder", __props.field.placeholder ? __props.field.placeholder : "")} data-v-dfc10149>${ssrInterpolate(__props.modelValue)}</textarea>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt-themes+alpine@1.6.4_postcss@8.4.31_rollup@3.29.4_vue@3.3.4/node_modules/@nuxt-themes/alpine/components/data-entry/Input.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dfc10149"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Input-5123c397.mjs.map
