import __nuxt_component_2 from './ProseA-0ca65316.mjs';
import { useSSRContext, defineComponent, withAsyncContext, computed, unref, mergeProps, withCtx, createTextVNode, toDisplayString } from 'vue';
import { u as useAsyncData } from './asyncData-2f1fb5f7.mjs';
import { x as withTrailingSlash } from '../../nitro/node-server.mjs';
import { _ as _export_sfc, q as queryContent } from '../server.mjs';
import { f as formatDate } from './date-d2ab7be4.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "articles-list",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: _articles } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "articles",
      () => queryContent(withTrailingSlash("articles")).where({
        draft: { $ne: true }
      }).sort({ date: -1 }).find()
    )), __temp = await __temp, __restore(), __temp);
    const articles = computed(() => _articles.value || []);
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ProseA = __nuxt_component_2;
      if ((_a = unref(articles)) == null ? void 0 : _a.length) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "articles-list" }, _attrs))} data-v-afa1a5e1><!--[-->`);
        ssrRenderList(unref(articles), (article) => {
          _push(`<article${ssrRenderAttr("data-content-id", article == null ? void 0 : article._id)} class="content" data-v-afa1a5e1>`);
          _push(ssrRenderComponent(_component_ProseA, {
            to: article._path,
            class: "headline"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(article.title)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(article.title), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`<time data-v-afa1a5e1>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(article.date))}</time></article>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "empty-state" }, _attrs))} data-v-afa1a5e1><p class="message" data-v-afa1a5e1> Seems like there are no articles yet. </p></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/articles-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const articlesList = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-afa1a5e1"]]);

export { articlesList as default };
//# sourceMappingURL=articles-list-9aef691a.mjs.map
