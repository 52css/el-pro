# Status 状态

## 基本用法

常用语表格中展示状态一栏

:::demo

```vue
<template>
  <h3>角标</h3>
  <el-pro-status status="success">Success</el-pro-status>
  <el-pro-status status="error">Error</el-pro-status>
  <el-pro-status>Info</el-pro-status>
  <el-pro-status status="processing">Processing</el-pro-status>
  <el-pro-status status="warning">Warning</el-pro-status>

  <h3>颜色</h3>
  <el-pro-status status="success" type="color">Success</el-pro-status>
  <el-pro-status status="error" type="color">Error</el-pro-status>
  <el-pro-status type="color">Info</el-pro-status>
  <el-pro-status status="processing" type="color">Processing</el-pro-status>
  <el-pro-status status="warning" type="color">Warning</el-pro-status>

  <h3>背景</h3>
  <el-pro-status status="success" type="background">Success</el-pro-status>
  <el-pro-status status="error" type="background">Error</el-pro-status>
  <el-pro-status type="background">Info</el-pro-status>
  <el-pro-status status="processing" type="background">Processing</el-pro-status>
  <el-pro-status status="warning" type="background">Warning</el-pro-status>

  <h3>圆角</h3>
  <el-pro-status status="success" type="round">Success</el-pro-status>
  <el-pro-status status="error" type="round">Error</el-pro-status>
  <el-pro-status type="round">Info</el-pro-status>
  <el-pro-status status="processing" type="round">Processing</el-pro-status>
  <el-pro-status status="warning" type="round">Warning</el-pro-status>


  <h3>边框</h3>
  <el-pro-status status="success" type="border">Success</el-pro-status>
  <el-pro-status status="error" type="border">Error</el-pro-status>
  <el-pro-status type="border">Info</el-pro-status>
  <el-pro-status status="processing" type="border">Processing</el-pro-status>
  <el-pro-status status="warning" type="border">Warning</el-pro-status>

</template>
```

:::

## 自定义颜色

:::demo

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const colorNameList = ref(['pink','red','yellow','orange','cyan','green','blue','purple','geekblue','magenta','volcano','gold','lime'])
const colorList = ref(['#f50', '#2db7f5', '#87d068', '#108ee9'])
</script>
<template>
  <h3>颜色名</h3>
  <el-pro-status v-for="(colorName) in colorNameList" :key="colorName" :status="colorName">{{colorName}}</el-pro-status>
  <h3>颜色值</h3>
  <el-pro-status v-for="(color) in colorList" :key="color" :status="color">{{color}}</el-pro-status>
</template>
```

:::

## Status API

```ts
export type Status = 'success' | 'error' | 'info' | 'processing' | 'warning'
export type Type = 'dot' | 'color' | 'background' | 'round' | 'border'
export type Color = 'pink' | 'red' | 'yellow' | 'orange' | 'cyan' | 'green' | 'blue' | 'purple' | 'geekblue' | 'magenta' | 'volcano' | 'gold' | 'lime'
```

### Attributes

| 参数    | 说明     | 类型             | 可选值 | 默认值 |
|---------|--------|------------------|--------|--------|
| status   | 状态 | `Status`  `Color` `自定义颜色` | —      | `info`     |
| type | 展示类型 | `Type`         | —      | `dot`      |

