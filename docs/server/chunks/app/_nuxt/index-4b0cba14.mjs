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

const _imports_0 = "" + buildAssetsURL("deba_icon.5d8a5a02.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-99930d7c><div class="card mx-auto my-5 shadow-lg mb-5 bg-body rounded-5" style="${ssrRenderStyle({ "max-width": "25rem" })}" data-v-99930d7c><img id="bigdeba"${ssrRenderAttr("src", _imports_0)} alt="\u30AB\u30FC\u30C9\u306E\u753B\u50CF" class="icon rounded-circle mx-auto mt-4" style="${ssrRenderStyle({ "max-width": "150px" })}" data-v-99930d7c><div class="card-body mb-3" data-v-99930d7c><p id="DBTitle" class="card-title text-center" data-v-99930d7c><span class="work" data-v-99930d7c>\u30C7\u30D0\u3044\u30B5\u30A4\u30C8</span></p><div class="mx-auto mb-3 text-center border-bottom border-secondry rounded-5" style="${ssrRenderStyle({ "max-width": "320px" })}" data-v-99930d7c></div><p class="card-text mx-4 info" data-v-99930d7c> \u30C7\u30D0\u691C\u5B9A\u3092\u53D7\u3051\u3088\u3046<br data-v-99930d7c> \u53D7\u9A13\u306F\u4E0B\u306E\u30DC\u30BF\u30F3\u304B\u3089\uFF5E\u{1F60B} </p><div class="mx-auto mt-3 text-center border-bottom rounded-5" style="${ssrRenderStyle({ "max-width": "320px" })}" data-v-99930d7c></div><p class="card-text mx-4 mt-4 fs-5" data-v-99930d7c>\u5168n\u554F</p>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    href: "./about",
    class: "btn hd hover-effect mt-4 mx-3 d-flex align-items-center rounded-pill text-center",
    style: { "height": "60px" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u30C7\u30D0\u691C\u3092\u53D7\u3051\u308B\uFF01`);
      } else {
        return [
          createTextVNode("\u30C7\u30D0\u691C\u3092\u53D7\u3051\u308B\uFF01")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    href: "./error",
    class: "btn gb hover-effect mt-4 mx-3 d-flex align-items-center rounded-pill text-center",
    style: { "height": "60px" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`\u304A\u307E\u3051 \u203B\u30A8\u30E9\u30FC\u30DA\u30FC\u30B8`);
      } else {
        return [
          createTextVNode("\u304A\u307E\u3051 \u203B\u30A8\u30E9\u30FC\u30DA\u30FC\u30B8")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-99930d7c"]]);

export { index as default };
//# sourceMappingURL=index-4b0cba14.mjs.map
