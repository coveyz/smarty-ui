import { presetAttributify, presetIcons, presetUno } from 'unocss'
import Unocss from 'unocss/vite'

const colors = [
  "white",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "indigo",
  "purple",
  "pink",
]

const icons = [
  "search",
  "edit",
  "check",
  "message",
  "star-off",
  "delete",
  "add",
  "share",
]


const safelist = [
  // ...icons.map(icon => `i-ic-baseline-${icon}`),
  ...icons.map(icon => `i-ic-baseline-${icon}`),
  ...colors.map(color => `bg-${color}-100`),
  ...colors.map(color => `bg-${color}-400`),
  ...colors.map(color => `bg-${color}-500`),
  ...colors.map(color => `hover:bg-${color}-100`),
  ...colors.map(color => `hover:bg-${color}-300`),
  ...colors.map(color => `hover:bg-${color}-400`),
  ...colors.map(color => `hover:bg-${color}-500`),
  ...colors.map((v) => `border-${v}-400`),
  ...colors.map((v) => `border-${v}-500`),
  ...Array.from({ length: 8 }, (_, index) => `px-${index + 1}`),
  ...Array.from({ length: 8 }, (_, index) => `py-${index + 1}`),
  ...["xs", "sm", "base", "lg", "xl", "2xl", "3xl"].map((v) => `text-${v}`),
  ...["rounded-full", "rounded-lg"],
]

export default () =>
  Unocss({
    safelist,
    presets: [
      presetAttributify(),
      presetIcons(), // 预设图标添加
      presetUno()]
  })
