# Operation 操作

## 基本用法

根据父元素宽度控制按钮是否折叠，常用语操作按钮中

:::demo

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const show1 = ref(false)
const show2 = ref(true)

setTimeout(() => {
  show2.value = false
}, 1000)
</script>
<template>
  <el-pro-operation style="width: 20px;">
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

## 子元素支持v-if控制

:::demo

```vue
<script lang="ts" setup>
import { ref } from 'vue'

const show1 = ref(false)
const show2 = ref(true)

setTimeout(() => {
  show2.value = false
}, 3000)
</script>
<template>
  <el-pro-operation style="width: 60px;">
    <el-pro-button v-if="show1" type="primary" link @click="console.log('edit')">编辑</el-pro-button>
    <el-pro-button type="default" link disabled>禁用</el-pro-button>
    <el-pro-button type="primary" link confirm="你确定删除吗" @confirm="console.log('delete')">删除</el-pro-button>
  </el-pro-operation>

  <el-pro-operation style="width: 100px;">
    <el-pro-button type="primary" link @click="console.log('edit')">编辑</el-pro-button>
    <el-pro-button v-if="show2" type="default" link disabled>禁用</el-pro-button>
    <el-pro-button type="primary" link confirm="你确定删除吗" @confirm="console.log('delete')">删除</el-pro-button>
  </el-pro-operation>
</template>
```