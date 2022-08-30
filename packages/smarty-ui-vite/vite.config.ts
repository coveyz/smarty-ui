/// <reference types="vitest" />
import { defineConfig, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import { presetUno, presetAttributify, presetIcons } from 'unocss';
// import Unocss from 'unocss/vite';
// import Unocss from './config/unocss'
import Unocss from "./config/unocss";
// import { UserConfig } from 'vitest'

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export const config = {
  plugins: [vue(), vueJsx({}), Unocss()],
  test: {
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持 tsx 组件
    transformMode: {
      web: [/.[tj]sx$/],
    },
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
    },
  },
  build: {
    rollupOptions,
    minify: "terser", // boolean | terser | esbuild
    sourcemap: true, // 输出 sourcemap
    brotliSize: true, // 生成压缩大小报告
    // cssCodeSplit: true,
    outDir: "./dist",
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUi",
      fileName: "smarty-ui",
      formats: ["es", "umd", "iife"],
    },
  },
};

export default defineConfig(config as UserConfig);
