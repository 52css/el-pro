# ButtonGroup 按钮组

## 基本用法

按钮超出长度，放到折叠按钮中

:::demo

```vue
<script lang="ts" setup>
</script>
<template>
  <el-pro-button-group style="width: 240px;">
    <el-pro-button type="text" @click="console.log('edit')">编辑</el-pro-button>
    <el-pro-button type="text" disabled>禁用</el-pro-button>
    <el-pro-button type="text" confirm="你确定删除吗" @confirm="console.log('delete')">删除</el-pro-button>
    <el-pro-button type="text" @click="console.log('edit')">编辑</el-pro-button>
    <el-pro-button type="text" disabled>禁用</el-pro-button>
    <el-pro-button type="text" confirm="你确定删除吗" @confirm="console.log('delete')">删除</el-pro-button>
  </el-pro-button-group>
</template>
```

:::

## ButtonGroup API

### Attributes

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| click    | 点击事件   | Async Function  | —                               | — |
<!-- | type    | 类型   | string  | primary / success / warning / info / danger / text | primary | -->
<!-- | loading | 加载中 | boolean | —                                                  | false   | -->

