import __nuxt_component_0 from './ArticlesListItem-103abb89.mjs';
import __nuxt_component_2 from './ProseA-0ca65316.mjs';
import __nuxt_component_1 from './ProseCodeInline-2152e73a.mjs';
import { useSSRContext, defineComponent, withAsyncContext, computed, unref, mergeProps, withCtx, createTextVNode } from 'vue';
import { u as useAsyncData } from './asyncData-2f1fb5f7.mjs';
import { x as withTrailingSlash } from '../../nitro/node-server.mjs';
import { _ as _export_sfc, q as queryContent } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import './date-d2ab7be4.mjs';
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
  __name: "ArticlesList",
  __ssrInlineRender: true,
  props: {
    path: {
      type: String,
      default: "articles"
    }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { data: _articles } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("articles", async () => await queryContent(withTrailingSlash(props.path)).sort({ date: -1 }).find())), __temp = await __temp, __restore(), __temp);
    const articles = computed(() => _articles.value || []);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ArticlesListItem = __nuxt_component_0;
      const _component_ProseA = __nuxt_component_2;
      const _component_ProseCodeInline = __nuxt_component_1;
      if ((_a = unref(articles)) == null ? void 0 : _a.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "articles-list" }, _attrs))} data-v-6e68fa1c><div class="featured" data-v-6e68fa1c>`);
        _push(ssrRenderComponent(_component_ArticlesListItem, {
          article: unref(articles)[0],
          featured: true
        }, null, _parent));
        _push(`</div><div class="layout" data-v-6e68fa1c><!--[-->`);
        ssrRenderList(unref(articles).slice(1), (article, index) => {
          _push(ssrRenderComponent(_component_ArticlesListItem, {
            key: index,
            article
          }, null, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "tour" }, _attrs))} data-v-6e68fa1c><p data-v-6e68fa1c>Seems like there are no articles yet.</p><p data-v-6e68fa1c> You can start by `);
        _push(ssrRenderComponent(_component_ProseA, { href: "https://alpine.nuxt.space/articles/write-articles" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`creating`);
            } else {
              return [
                createTextVNode("creating")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` one in the `);
        _push(ssrRenderComponent(_component_ProseCodeInline, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`articles`);
            } else {
              return [
                createTextVNode("articles")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(` folder. </p></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt-themes+alpine@1.6.4_postcss@8.4.31_rollup@3.29.4_vue@3.3.4/node_modules/@nuxt-themes/alpine/components/content/ArticlesList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArticlesList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-6e68fa1c"]]);

export { ArticlesList as default };
//# sourceMappingURL=ArticlesList-720f8fcb.mjs.map
