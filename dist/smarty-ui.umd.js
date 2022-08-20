(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.SmartyUi = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  const JSXButton = vue.defineComponent({
    name: "JSXButton",
    render() {
      return vue.createVNode("button", null, [vue.createTextVNode("JSXButton")]);
    }
  });
  const _sfc_main = vue.defineComponent({
    name: "SFCButton",
    setup() {
      return {};
    }
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("button", null, " SFC Button", -1);
  const _hoisted_2 = [
    _hoisted_1
  ];
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", null, _hoisted_2);
  }
  const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  const MyButton = vue.defineComponent({
    name: "SButton",
    render() {
      return vue.h("button", null, "MyButton");
    }
  });
  const entry = {
    install(app) {
      app.component(JSXButton.name, JSXButton);
      app.component(SFCButton.name, SFCButton);
      app.component(MyButton.name, MyButton);
    }
  };
  exports2.JSXButton = JSXButton;
  exports2.MyButton = MyButton;
  exports2.SFCButton = SFCButton;
  exports2.default = entry;
  Object.defineProperties(exports2, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
});
