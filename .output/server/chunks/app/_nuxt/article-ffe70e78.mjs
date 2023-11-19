import { _ as _export_sfc, h as useContent, b as useRoute, n as useAppConfig, u as useHead, a as __nuxt_component_0$4, p as __nuxt_component_1$1 } from '../server.mjs';
import __nuxt_component_2 from './ProseA-0ca65316.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { f as formatDate } from './date-d2ab7be4.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
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
  __name: "article",
  __ssrInlineRender: true,
  setup(__props) {
    const { page } = useContent();
    const route = useRoute();
    const alpine = useAppConfig().alpine;
    const article2 = ref(null);
    if (page.value && page.value.cover) {
      useHead({
        meta: [
          { property: "og:image", content: page.value.cover }
        ]
      });
    }
    const parentPath = computed(
      () => {
        const pathTabl = route.path.split("/");
        pathTabl.pop();
        return pathTabl.join("/");
      }
    );
    const onBackToTop = () => {
      var _a;
      (_a = article2.value) == null ? void 0 : _a.scrollIntoView({
        behavior: "smooth"
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_NuxtLink = __nuxt_component_0$4;
      const _component_Icon = __nuxt_component_1$1;
      const _component_ProseA = __nuxt_component_2;
      _push(`<article${ssrRenderAttrs(mergeProps({
        ref_key: "article",
        ref: article2
      }, _attrs))} data-v-9c215548>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(parentPath),
        class: "back"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Icon, { name: "ph:arrow-left" }, null, _parent2, _scopeId));
            _push2(`<span data-v-9c215548${_scopeId}> Back </span>`);
          } else {
            return [
              createVNode(_component_Icon, { name: "ph:arrow-left" }),
              createVNode("span", null, " Back ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<header data-v-9c215548>`);
      if ((_a = unref(page)) == null ? void 0 : _a.title) {
        _push(`<h1 class="title" data-v-9c215548>${ssrInterpolate(unref(page).title)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if ((_b = unref(page)) == null ? void 0 : _b.date) {
        _push(`<time${ssrRenderAttr("datetime", unref(page).date)} data-v-9c215548>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(unref(page).date))}</time>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header><div class="prose" data-v-9c215548>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      if ((_c = unref(alpine)) == null ? void 0 : _c.backToTop) {
        _push(`<div class="back-to-top" data-v-9c215548>`);
        _push(ssrRenderComponent(_component_ProseA, { onClick: onBackToTop }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a2, _b2, _c2, _d, _e, _f, _g, _h;
            if (_push2) {
              _push2(`${ssrInterpolate(((_b2 = (_a2 = unref(alpine)) == null ? void 0 : _a2.backToTop) == null ? void 0 : _b2.text) || "Back to top")} `);
              _push2(ssrRenderComponent(_component_Icon, {
                name: ((_d = (_c2 = unref(alpine)) == null ? void 0 : _c2.backToTop) == null ? void 0 : _d.icon) || "material-symbols:arrow-upward"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createTextVNode(toDisplayString(((_f = (_e = unref(alpine)) == null ? void 0 : _e.backToTop) == null ? void 0 : _f.text) || "Back to top") + " ", 1),
                createVNode(_component_Icon, {
                  name: ((_h = (_g = unref(alpine)) == null ? void 0 : _g.backToTop) == null ? void 0 : _h.icon) || "material-symbols:arrow-upward"
                }, null, 8, ["name"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt-themes+alpine@1.6.4_postcss@8.4.31_rollup@3.29.4_vue@3.3.4/node_modules/@nuxt-themes/alpine/layouts/article.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const article = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9c215548"]]);

export { article as default };
//# sourceMappingURL=article-ffe70e78.mjs.map
