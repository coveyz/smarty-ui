//* 主题
import Theme from 'vitepress/dist/client/theme-default'
//* 组件
import SmartyUI from '../../../src/entry'
//* 插件的组件，  主要是demo组件
import 'vitepress-theme-demoblock/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(SmartyUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}