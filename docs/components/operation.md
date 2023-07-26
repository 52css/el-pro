# Operation 操作

## 基本用法

根据父元素宽度控制按钮是否折叠，常用语操作按钮中

:::demo

```vue
<script lang="ts" setup>
</script>
<template>
  <el-pro-operation style="width: 40px;">
    <el-pro-button type="primary" link @click="console.log('edit')">编辑</el-pro-button>
    <el-pro-button type="default" link disabled>禁用</el-pro-button>
    <el-pro-button type="primary" link confirm="你确定删除吗" @confirm="console.log('delete')">删除</el-pro-button>
  </el-pro-operation>

  <el-pro-operation style="width: 60px;">
    <el-pro-button type="primary" link @click="console.log('edit')">编辑</el-pro-button>
    <el-pro-button type="default" link disabled>禁用</el-pro-button>
    <el-pro-button type="primary" link confirm="你确定删除吗" @confirm="console.log('delete')">删除</el-pro-button>
  </el-pro-operation>

  <el-pro-operation style="width: 120px;">
    <el-pro-button type="primary" link @click="console.log('edit')">编辑</el-pro-button>
    <el-pro-button type="default" link disabled>禁用</el-pro-button>
    <el-pro-button type="primary" link confirm="你确定删除吗" @confirm="console.log('delete')">删除</el-pro-button>
    <el-pro-button type="primary" link @click="console.log('edit')">编辑</el-pro-button>
    <el-pro-button type="default" link disabled>禁用</el-pro-button>
    <el-pro-button type="primary" link confirm="你确定删除吗" @confirm="console.log('delete')">删除</el-pro-button>
  </el-pro-operation>
</template>
```

:::

## TODO:子元素支持v-if控制