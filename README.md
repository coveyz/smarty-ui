<br>

<p align="center">
<img src="https://github.com/smarty-team/smarty-admin/blob/main/assets/logo.jpeg" style="width:200px;" />
</p>

<h1 align="center">Smarty-Admin</h1>

<p align="center">
前端工程化教学模型
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/smarty-ui-block"><img src="https://img.shields.io/npm/v/smarty-ui-block?color=c95f8b&amp;label=NPM" alt="NPM version"></a>
    <a href="https://github.com/coveyz/smarty-ui/actions/workflows/main.yml"><img src="https://github.com/coveyz/smarty-ui/actions/workflows/main.yml/badge.svg?branch=main" alt="CI" style="max-width: 100%;"></a>
      <img src="https://img.shields.io/github/license/coveyz/smarty-ui">
    <img src='https://codecov.io/gh/coveyz/smarty-ui/branch/main/graph/badge.svg?token=RUWIZDNLL0' />
</p>

<br>
<br>

## Features

前端工程化演示项目。
- 基于Vue框架
- 支持JSX与Vue单文件组件
- Jest + Vue3 plugins实现单元测试
- Eslint + Prettier + Husky 语法检查
- Vitepress + Vercel 文档网站搭建
- 基于Action CI 实现持续集成与交付

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