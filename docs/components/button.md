# Button 按钮

## 防重事件

点击函数是promise等待请求完毕自动解锁

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


## Button API
### Attributes

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| click    | 点击事件   | Async Function  | —                               | — |
<!-- | type    | 类型   | string  | primary / success / warning / info / danger / text | primary | -->
<!-- | loading | 加载中 | boolean | —                                                  | false   | -->

