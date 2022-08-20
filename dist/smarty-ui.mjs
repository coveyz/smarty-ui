import { defineComponent, createVNode, createTextVNode, openBlock, createElementBlock, createElementVNode, h } from "vue";
const JSXButton = defineComponent({
  name: "JSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("JSXButton")]);
  }
});
const _sfc_main = defineComponent({
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
const _hoisted_1 = /* @__PURE__ */ createElementVNode("button", null, " SFC Button", -1);
const _hoisted_2 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_2);
}
const SFCButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const MyButton = defineComponent({
  name: "SButton",
  render() {
    return h("button", null, "MyButton");
  }
});
const entry = {
  install(app) {
    app.component(JSXButton.name, JSXButton);
    app.component(SFCButton.name, SFCButton);
    app.component(MyButton.name, MyButton);
  }
};
export {
  JSXButton,
  MyButton,
  SFCButton,
  entry as default
};
