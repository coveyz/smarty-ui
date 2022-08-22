import { defineComponent, createVNode, createTextVNode, openBlock, createElementBlock, createElementVNode } from "vue";
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
const _export_sfc = (sfc, props2) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props2) {
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
const __uno = "";
const props = {
  color: {
    type: String,
    default: "blue"
  },
  size: {
    type: String,
    default: "medium"
  },
  icon: {
    type: String,
    default: ""
  }
};
const size = {
  small: {
    x: "2",
    y: "1",
    text: "sm"
  },
  medium: {
    x: "3",
    y: "1",
    text: "base"
  },
  large: {
    x: "4",
    y: "2",
    text: "lg"
  }
};
const MyButton = defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    console.log("props=>", props2);
    return () => createVNode("button", {
      "class": `
      py-${size[props2.size].y}
      px-${size[props2.size].x}
      font-semibold 
      rounded-lg 
      shadow-md 
      text-white 
      bg-${props2.color}-500 
      hover:bg-${props2.color}-700 
      border-none 
      cursor-pointer 
      m-1
      `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
console.log("MyButton", MyButton.name);
const entry = {
  install(app) {
    app.component(MyButton.name, MyButton);
    app.component(JSXButton.name, JSXButton);
    app.component(SFCButton.name, SFCButton);
  }
};
export {
  JSXButton,
  MyButton,
  SFCButton,
  entry as default
};
