# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

:::demo

```vue
<template>
  <el-pro-button>默认按钮</el-pro-button>
  <el-pro-button type="primary">主要按钮</el-pro-button>
  <el-pro-button type="success">成功按钮</el-pro-button>
  <el-pro-button type="info">信息按钮</el-pro-button>
  <el-pro-button type="warning">警告按钮</el-pro-button>
  <el-pro-button type="danger">危险按钮</el-pro-button>
</template>
```

:::

## 防重事件

点击函数是promise等待解决再把lock解锁

:::demo

```vue
<script lang="ts" setup>
const sleep = (timer: number) =>
  new Promise((resolve) => setTimeout(resolve, timer));
const handleClick1 = async () => {
  await sleep(1000);
};
</script>
<template>
  <el-pro-button @click="handleClick1">默认按钮</el-pro-button>
  <el-pro-button type="primary" @click="handleClick1">主要按钮</el-pro-button>
  <el-pro-button type="success" @click="handleClick1">成功按钮</el-pro-button>
  <el-pro-button type="info" @click="handleClick1">信息按钮</el-pro-button>
  <el-pro-button type="warning" @click="handleClick1">警告按钮</el-pro-button>
  <el-pro-button type="danger" @click="handleClick1">危险按钮</el-pro-button>
</template>
```

:::


## Attributes

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| click    | 点击事件   | Async Function  | —                               | — |
<!-- | type    | 类型   | string  | primary / success / warning / info / danger / text | primary | -->
<!-- | loading | 加载中 | boolean | —                                                  | false   | -->

