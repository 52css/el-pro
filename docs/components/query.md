# Query 查询

常用的操作按钮。

## 查询筛选

:::demo

```vue
<script lang="ts" setup>
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const onSubmit = () => {
  console.log("submit!");
};
</script>
<template>
  <el-pro-query :model="form" label-width="120px">
    <el-form-item label="应用名称">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="创建时间">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="应用状态">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="响应日期">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="创建时间">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="结束时间">
      <el-input v-model="form.name" />
    </el-form-item>
  </el-pro-query>
</template>
```

:::

## Query API

同el-form https://element-plus.org/zh-CN/component/form.html#%E6%97%A0%E9%9A%9C%E7%A2%8D

