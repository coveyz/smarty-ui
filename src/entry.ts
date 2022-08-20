import { App } from 'vue';

import JSXButton from './button/JSXButton';
import SFCButton from './button/SFCButton.vue';
import MyButton from './button/index';

//* 导出单个组件
export { JSXButton, SFCButton, MyButton }

//* 编写一个插件，实现一个 install 方法
export default {
  install(app: App): void {
    app.component(JSXButton.name, JSXButton)
    app.component(SFCButton.name, SFCButton)
    app.component(MyButton.name, MyButton)
  }
}
