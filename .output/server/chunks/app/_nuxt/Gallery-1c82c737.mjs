import { _ as _export_sfc, o as usePinceauRuntime, m as _sfc_main$a } from '../server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "Gallery",
  __ssrInlineRender: true,
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const __$pProps = __props;
    const _6Li_cols = computed(() => ((props = __$pProps) => props.images.length < 2 ? props.images.length : 2)());
    const { $pinceau } = usePinceauRuntime(__$pProps, void 0, { _6Li_cols });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$a;
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: ["gallery", [unref($pinceau)]]
      }, _attrs))} data-v-52f11c36><div class="layout" data-v-52f11c36><!--[-->`);
      ssrRenderList(__props.images, (image, index) => {
        _push(ssrRenderComponent(_component_NuxtImg, {
          key: index,
          src: image,
          width: 16,
          height: 9
        }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt-themes+alpine@1.6.4_postcss@8.4.31_rollup@3.29.4_vue@3.3.4/node_modules/@nuxt-themes/alpine/components/content/Gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Gallery = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-52f11c36"]]);

export { Gallery as default };
//# sourceMappingURL=Gallery-1c82c737.mjs.map
