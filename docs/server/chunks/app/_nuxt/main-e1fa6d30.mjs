import { createApp, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

createApp({
  data() {
    return {
      center: true,
      left: false,
      right: false
    };
  },
  methods: {
    watchCenter: function() {
      this.center = true;
      this.left = false;
      this.right = false;
    },
    watchLeft: function() {
      this.center = false;
      this.left = true;
      this.right = false;
    },
    watchRight: function() {
      this.center = false;
      this.left = false;
      this.right = true;
    }
  }
}).mount("#app");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "app" }, _attrs))}>`);
  if (_ctx.center) {
    _push(`<div><p>\u6700\u521D\u306E\u753B\u9762</p><div>\u5DE6\u306E\u753B\u9762\u306B\u3044\u304F</div><div>\u53F3\u306E\u753B\u9762\u306B\u3044\u304F</div></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.left) {
    _push(`<div><p>\u5DE6\u306E\u753B\u9762</p><div>\u6700\u521D\u306E\u753B\u9762\u306B\u623B\u308B</div><div>\u53F3\u306E\u753B\u9762\u306B\u3044\u304F</div></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.right) {
    _push(`<div><p>\u53F3\u306E\u753B\u9762</p><div>\u6700\u521D\u306E\u753B\u9762\u306B\u623B\u308B</div><div>\u5DE6\u306E\u753B\u9762\u306B\u3044\u304F</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/main.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const main = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { main as default };
//# sourceMappingURL=main-e1fa6d30.mjs.map
