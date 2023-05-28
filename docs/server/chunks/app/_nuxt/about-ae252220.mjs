import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-0d39ff03.mjs';
import { mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import 'devalue';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'klona';
import 'defu';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import '../server.mjs';
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("deba.32add915.jpg");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-dbbe0e7e><div class="card mx-auto my-5 shadow-lg mb-5 bg-body rounded-5" style="${ssrRenderStyle({ "max-width": "25rem" })}" data-v-dbbe0e7e><img${ssrRenderAttr("src", _imports_0)} class="card-img-to rounded-5 rounded-bottom" alt="..." data-v-dbbe0e7e><div class="card-body mb-3" data-v-dbbe0e7e><p class="card-title text-center cocoa title_text" data-v-dbbe0e7e><span data-v-dbbe0e7e>\u30C7\u30D0\u30D0\uFF01</span></p><p class="card-text text-center fs-5" data-v-dbbe0e7e> \uFF5E\u53EF\u611B\u3044\u751F\u304D\u7269\uFF5E<br data-v-dbbe0e7e><span class="zunda" data-v-dbbe0e7e>\u30CF\u30C0\u30AB\u30C7\u30D0\u30CD\u30BA\u30DF</span></p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    href: "./",
    class: "btn mt-4 mx-3 d-flex align-items-center rounded-pill text-center",
    style: { "height": "60px" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u623B\u308B`);
      } else {
        return [
          createTextVNode("\u623B\u308B")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dbbe0e7e"]]);

export { about as default };
//# sourceMappingURL=about-ae252220.mjs.map
