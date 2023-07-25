# 指南

## 安装依赖

```shell
# npm
npm install -S @52css/el-pro

# yarn
yarn add @52css/el-pro

# pnpm
pnpm add -S @52css/el-pro
```

## 引用

在`main.js`

```ts
import { createApp } from 'vue'
// 引用组件
import ElPro from '@52css/el-pro'
// 引用css
import 'element-plus/dist/index.css'
import '@52css/el-pro/dist/index.min.css'

const app = createApp(App)
// 安装组件
app.use(ElPro)
app.mount('#app')

```

## 全局使用
```html
<el-pro-button>这个是按钮</el-pro-button>
```

## 效果1

![Alt text](image.png)