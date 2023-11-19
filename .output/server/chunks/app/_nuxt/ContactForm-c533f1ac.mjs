import __nuxt_component_0 from './Input-5123c397.mjs';
import __nuxt_component_1 from './Button-8324d6c5.mjs';
import { _ as _export_sfc, n as useAppConfig, g as useRuntimeConfig } from '../server.mjs';
import { useSSRContext, defineComponent, ref, reactive, mergeProps, unref, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "ContactForm",
  __ssrInlineRender: true,
  props: {
    submitButtonText: {
      type: String,
      default: "Send message"
    },
    fields: {
      type: Array,
      default: () => [
        {
          type: "text",
          model: "name",
          name: "Name",
          placeholder: "Your name",
          required: true,
          layout: "default"
        },
        {
          type: "email",
          model: "email",
          name: "Email",
          placeholder: "Your email",
          required: true,
          layout: "default"
        },
        {
          type: "text",
          model: "text",
          name: "Subject",
          required: false,
          layout: "default"
        },
        {
          type: "textarea",
          model: "message",
          name: "Message",
          placeholder: "Your message",
          required: true,
          layout: "big"
        }
      ]
    }
  },
  setup(__props) {
    const props = __props;
    useAppConfig().alpine;
    const { FORMSPREE_URL } = useRuntimeConfig().public;
    if (!FORMSPREE_URL) {
      console.warn("No FORMSPREE_URL provided");
    }
    const status = ref();
    const form = reactive(props.fields.map((v) => ({ ...v, data: "" })));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Input = __nuxt_component_0;
      const _component_Button = __nuxt_component_1;
      _push(`<form${ssrRenderAttrs(mergeProps({
        class: "contact-form",
        method: "POST",
        action: unref(FORMSPREE_URL)
      }, _attrs))} data-v-8d7ecaa7><div class="inputs" data-v-8d7ecaa7><!--[-->`);
      ssrRenderList(unref(form), (field, index) => {
        _push(ssrRenderComponent(_component_Input, {
          key: index,
          modelValue: field.data,
          "onUpdate:modelValue": ($event) => field.data = $event,
          field
        }, null, _parent));
      });
      _push(`<!--]--></div><div data-v-8d7ecaa7>`);
      _push(ssrRenderComponent(_component_Button, {
        type: "submit",
        disabled: !unref(FORMSPREE_URL)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(status) ? unref(status) : __props.submitButtonText)}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(status) ? unref(status) : __props.submitButtonText), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/.pnpm/@nuxt-themes+alpine@1.6.4_postcss@8.4.31_rollup@3.29.4_vue@3.3.4/node_modules/@nuxt-themes/alpine/components/content/ContactForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ContactForm = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8d7ecaa7"]]);

export { ContactForm as default };
//# sourceMappingURL=ContactForm-c533f1ac.mjs.map
