import { _ as _export_sfc, k as useContentPreview, a as __nuxt_component_0$4, m as _sfc_main$a } from '../server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, openBlock, createBlock, createCommentVNode, createVNode, toDisplayString } from 'vue';
import { f as formatDate } from './date-d2ab7be4.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderStyle, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "ArticlesListItem",
  __ssrInlineRender: true,
  props: {
    article: {
      type: Object,
      required: true,
      validator: (value) => {
        if ((value == null ? void 0 : value._path) && value.title) {
          return true;
        }
        return false;
      }
    },
    featured: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const id = computed(() => {
      var _a, _b;
      return ((_a = useContentPreview()) == null ? void 0 : _a.isEnabled()) ? (_b = props.article) == null ? void 0 : _b._id : void 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_NuxtLink = __nuxt_component_0$4;
      const _component_NuxtImg = _sfc_main$a;
      if (__props.article._path && __props.article.title) {
        _push(`<article${ssrRenderAttrs(mergeProps({
          class: { "featured": __props.featured },
          "data-content-id": unref(id)
        }, _attrs))} data-v-bd689c7a><div class="image" data-v-bd689c7a>`);
        if ((_a = __props.article) == null ? void 0 : _a.badges) {
          _push(`<div data-v-bd689c7a><!--[-->`);
          ssrRenderList(__props.article.badges, (badge, index) => {
            _push(`<span style="${ssrRenderStyle({
              backgroundColor: (badge == null ? void 0 : badge.bg) || "rgba(0, 0, 0, 0.3)",
              color: (badge == null ? void 0 : badge.color) || "white"
            })}" data-v-bd689c7a>${ssrInterpolate(typeof badge === "string" ? badge : badge.content)}</span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.article._path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.article.cover) {
                _push2(ssrRenderComponent(_component_NuxtImg, {
                  src: __props.article.cover,
                  alt: __props.article.title,
                  width: "16",
                  height: "9"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                __props.article.cover ? (openBlock(), createBlock(_component_NuxtImg, {
                  key: 0,
                  src: __props.article.cover,
                  alt: __props.article.title,
                  width: "16",
                  height: "9"
                }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="content" data-v-bd689c7a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: __props.article._path,
          class: "headline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h1 data-v-bd689c7a${_scopeId}>${ssrInterpolate(__props.article.title)}</h1>`);
            } else {
              return [
                createVNode("h1", null, toDisplayString(__props.article.title), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="description" data-v-bd689c7a>${ssrInterpolate(__props.article.description)}</p><time data-v-bd689c7a>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(__props.article.date))}</time></div></article>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt-themes+alpine@1.6.4_postcss@8.4.31_rollup@3.29.4_vue@3.3.4/node_modules/@nuxt-themes/alpine/components/content/ArticlesListItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bd689c7a"]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=ArticlesListItem-103abb89.mjs.map
