import __nuxt_component_0 from './ProseH4-e0f75bcd.mjs';
import __nuxt_component_1$1 from './ProseCodeInline-2152e73a.mjs';
import __nuxt_component_2 from './Badge-88165812.mjs';
import __nuxt_component_3 from './ProseP-169595f2.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useVModel } from '@vueuse/core';
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
import './ssrSlot-d8dee73a.mjs';
import './MDCSlot-6377ba4e.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ComponentPlaygroundProps",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    componentData: {
      type: Object,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const formData = useVModel(props, "modelValue", emits);
    const componentProps = computed(() => {
      var _a, _b;
      return (_b = (_a = props == null ? void 0 : props.componentData) == null ? void 0 : _a.meta) == null ? void 0 : _b.props;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProseH4 = __nuxt_component_0;
      const _component_ProseCodeInline = __nuxt_component_1$1;
      const _component_Badge = __nuxt_component_2;
      const _component_ProseP = __nuxt_component_3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "component-playground-data-section" }, _attrs))} data-v-2349cdfc><!--[-->`);
      ssrRenderList(unref(componentProps), (prop) => {
        _push(`<div data-v-2349cdfc><div${ssrRenderAttr("id", prop.name)} class="prop-title" data-v-2349cdfc>`);
        _push(ssrRenderComponent(_component_ProseH4, {
          id: prop.name
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(prop.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(prop.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<span data-v-2349cdfc>`);
        _push(ssrRenderComponent(_component_ProseCodeInline, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(prop.type)}`);
            } else {
              return [
                createTextVNode(toDisplayString(prop.type), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        if (!prop.required) {
          _push(ssrRenderComponent(_component_Badge, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Required `);
              } else {
                return [
                  createTextVNode(" Required ")
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</span></div>`);
        if (prop.description) {
          _push(ssrRenderComponent(_component_ProseP, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(prop.description)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(prop.description), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<input${ssrRenderAttr("value", unref(formData)[prop.name])} data-v-2349cdfc></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt-themes+elements@0.9.5_postcss@8.4.31_rollup@3.29.4_vue@3.3.4/node_modules/@nuxt-themes/elements/components/meta/ComponentPlaygroundProps.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2349cdfc"]]);

export { __nuxt_component_1 as default };
//# sourceMappingURL=ComponentPlaygroundProps-fa34a78a.mjs.map
