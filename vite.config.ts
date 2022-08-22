import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import { presetUno, presetAttributify, presetIcons } from 'unocss';
// import Unocss from 'unocss/vite';
// import Unocss from './config/unocss'
import Unocss from "./config/unocss";


const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({}),
    Unocss()
  ],
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: './src/entry.ts',
      name: 'SmartyUi',
      fileName: 'smarty-ui',
      formats: ['es', 'umd', 'iife']
    }
  }
})