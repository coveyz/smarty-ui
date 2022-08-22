import { defineComponent,PropType,toRefs} from "vue";
import "uno.css";

export type Icolor = 'black' | 'gray' | 'red' | 'yellow' | 'green'|'blue'|'indigo'|'purple'|'pink'
export type ISize = "small" | "medium" | "large";
export const props = {
  color: {
    type: String as PropType<Icolor>,
    default: 'blue'
  },
  size: {
    type: String as PropType<ISize>,
    default: 'medium'
  },
  icon: {
    type: String,
    default: ''
  },
  round: {
   type: Boolean,
   default: false 
  },
  plain: {
    type: Boolean,
    default: false,
  },
}

const size = {
  small: {
    x: "2",
    y: "1",
    text: "sm",
  },
  medium: {
    x: "3",
    y: "1",
    text: "base",
  },
  large: {
    x: "4",
    y: "2",
    text: "lg",
  },
};


export default defineComponent({
  name: "SButton",
  props,
  setup(props, {slots}) {
    console.log('props=>',props)
    return () => <button 
      class={`
      py-${size[props.size].y}
      px-${size[props.size].x}
      ${props.round ? "rounded-full" : "rounded-lg"}
      bg-${props.color}-${props.plain ? "100" : "500"}
      hover:bg-${props.color}-400
      border-${props.color}-${props.plain ? "500" : "500"}
      cursor-pointer
      border-solid
      text-${props.plain ? props.color + "-500" : "white"}
      text-${size[props.size].text}
      hover:text-white
      transition duration-300 ease-in-out transform hover:scale-105
      mx-1
      `}
        > 
        {props.icon !== '' ?<i class={`i-ic-baseline-${props.icon} p-3`}/> : ''}
        {slots.default ? slots.default() : ''}
     </button>
  }
});