import { b as buildAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-0d39ff03.mjs';
import { u as useHead, a as useError } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, unref, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
import 'unctx';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + buildAssetsURL("deba_illust.b68ade31.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u30C7\u30D0\u691C | \u30A8\u30E9\u30FC\u3067\u3070\uFF01"
    });
    const error2 = useError();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-0603db54><div class="card mx-auto my-5 shadow-lg mb-5 bg-body rounded-5" style="${ssrRenderStyle({ "max-width": "25rem" })}" data-v-0603db54><img id="GataDeba"${ssrRenderAttr("src", _imports_0)} alt="..." data-v-0603db54><div class="card-body mb-3" data-v-0603db54><p class="card-title text-center" data-v-0603db54>${ssrInterpolate(unref(error2))}</p><p class="card-text text-center title title_text" data-v-0603db54><span data-v-0603db54>\u30A8\u30E9\u30FC</span></p><p class="card-text text-center fs-5" data-v-0603db54>\u30C7\u30D0...\u{1F62D}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        href: "/",
        class: "btn hover-effect mt-4 mx-3 d-flex align-items-center text-center rounded-pill text-center",
        style: { "height": "60px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u30DB\u30FC\u30E0\u306B\u623B\u308B\u30C7\u30D0\u3088`);
          } else {
            return [
              createTextVNode("\u30DB\u30FC\u30E0\u306B\u623B\u308B\u30C7\u30D0\u3088")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const error = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0603db54"]]);

export { error as default };
//# sourceMappingURL=error-component-8afed8e9.mjs.map
