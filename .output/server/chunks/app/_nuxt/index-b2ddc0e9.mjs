import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref } from 'vue';
import { g as useRouter } from '../server.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useAsyncData, q as queryContent } from './query-90e8de0b.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'h3';
import 'ufo';
import 'dayjs';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/advancedFormat.js';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';
import 'cookie-es';
import './utils-b462b102.mjs';

const __default__ = {
  name: "BlogItemComponent"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __ssrInlineRender: true,
  props: {
    description: null,
    title: null,
    slug: null
  },
  setup(__props) {
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ ..._ctx.$attrs }, { class: "cursor-pointer group" }, _attrs))}><div class="py-3"></div><h1 class="group-hover:text-pastel-green-600 transition-all duration-300">${ssrInterpolate(__props.title)}</h1><p>${ssrInterpolate(__props.description)}</p><div class="flex items-center gap-1"><span class="font-semibold">Read more</span></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/blog/Item.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "home",
      () => queryContent("/").limit(5).where({ isPublished: true }).only(["description", "title", "_path"]).find()
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogItem = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "prose prose-a:no-underline prose-slate dark:prose-invert max-w-none" }, _attrs))}><!--[-->`);
      ssrRenderList(unref(data), (post, index) => {
        _push(ssrRenderComponent(_component_BlogItem, {
          id: `blog-post-${index + 1}`,
          key: index,
          slug: post._path,
          title: post.title,
          description: post.description
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-b2ddc0e9.mjs.map
