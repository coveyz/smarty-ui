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
const _hoisted_1 = /* @__PURE__ */ createElementVNode("button", null, "SFC Button", -1);
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
  },
  round: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
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
const Button = defineComponent({
  name: "SButton",
  props,
  setup(props2, {
    slots
  }) {
    return () => createVNode("button", {
      "class": `
      py-${size[props2.size].y}
      px-${size[props2.size].x}
      ${props2.round ? "rounded-full" : "rounded-lg"}
      bg-${props2.color}-${props2.plain ? "100" : "500"}
      hover:bg-${props2.color}-400
      border-${props2.color}-${props2.plain ? "500" : "500"}
      cursor-pointer
      border-solid
      text-${props2.plain ? props2.color + "-500" : "white"}
      text-${size[props2.size].text}
      hover:text-white
      transition duration-300 ease-in-out transform hover:scale-105
      mx-1
      `
    }, [props2.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props2.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
console.log("MyButton", Button.name);
const entry = {
  install(app) {
    app.component(Button.name, Button);
    app.component(JSXButton.name, JSXButton);
    app.component(SFCButton.name, SFCButton);
  }
};
export {
  JSXButton,
  Button as MyButton,
  SFCButton,
  entry as default
};
//# sourceMappingURL=smarty-ui.mjs.map
