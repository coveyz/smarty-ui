# 🔨 Smarty-UI是什么?
[![CI](https://github.com/coveyz/smarty-ui/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/coveyz/smarty-ui/actions/workflows/main.yml)

一个Mini版的组件库，基于Vite栈。为需要学习前端工程化的同学搭建的组件库搭建教学模型。
## Features

- ⚡️ Vue 3, Vite 2, pnpm, ESBuild - born with fastness
- 🦾 TypeScript, of course
- 🗂 File based routing
- ⚙️ Unit Testing with Vitest
- 😃 Eslint + Prittier
- 🎨 UnoCSS - the instant on-demand atomic CSS engine
- 🌍 I18n ready
- 🚘 CI/CD with GithubActions


## Install

```bash
npm i smarty-ui-block
```

## Quick Start

```js
    import Vue from 'vue'
    import SmartyUI from 'element-ui'

    const App = {
        template: `
                <MyButton/>
            `,
    };

    createApp(App)
        .use(SmartyUI)
        .mount("#app");

```

## Browser Support

Modern browsers and Internet Explorer 10+.




