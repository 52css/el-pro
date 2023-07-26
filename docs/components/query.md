# Query 查询

列表的查询按钮，操作永远再右下角，如果超过1行展示“展开”，点击“展开”显示所有搜索条件，内部元素是响应式布局根据dom元素的宽度自动分栏2、3、4栏目

## 查询筛选-默认收起

:::demo

```vue
<script lang="ts" setup>
import { reactive, toRefs } from "vue";

// do not use same name with ref
const form = reactive({
  name: "",
  a: "",
  b: "",
  c: "",
  d: "",
  e: "",
});

const handleReset = () => {
  console.log('reset')
}

const handleQuery = () => {
  console.log("query", form);
};
</script>
<template>
  <el-pro-query :model="form" label-width="120px" @reset="handleReset" @query="handleQuery">
    <el-form-item label="应用名称" prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="创建时间" prop="a">
      <el-input v-model="form.a" />
    </el-form-item>
    <el-form-item label="应用状态" prop="b">
      <el-input v-model="form.b" />
    </el-form-item>
    <el-form-item label="响应日期" prop="c">
      <el-input v-model="form.c" />
    </el-form-item>
    <el-form-item label="创建时间" prop="d">
      <el-input v-model="form.d" />
    </el-form-item>
    <el-form-item label="结束时间" prop="e">
      <el-input v-model="form.e" />
    </el-form-item>
  </el-pro-query>
</template>
```

:::

## 查询筛选-垂直布局

:::demo

```vue
<script lang="ts" setup>
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  name: "",
  a: "",
  b: "",
  c: "",
  d: "",
  e: "",
});

const handleReset = () => {
  console.log('reset')
}

const handleQuery = () => {
  console.log("query", form);
};
</script>
<template>
  <el-pro-query :model="form" label-position="top" @reset="handleReset" @query="handleQuery">
    <el-form-item label="这是一个超级超级长的名称" prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="创建时间" prop="a">
      <el-input v-model="form.a" />
    </el-form-item>
    <el-form-item label="应用状态" prop="b">
      <el-input v-model="form.b" />
    </el-form-item>
    <el-form-item label="响应日期" prop="c">
      <el-input v-model="form.c" />
    </el-form-item>
    <el-form-item label="创建时间" prop="d">
      <el-input v-model="form.d" />
    </el-form-item>
    <el-form-item label="结束时间" prop="e">
      <el-input v-model="form.e" />
    </el-form-item>
  </el-pro-query>
</template>
```

:::

## Query API

```ts

// false 不分栏
// true 子根据父宽度自动分栏
// number 设置指定的栏目, 12格拆分
export type Col = boolean | number
```

### Query Attributes

| 参数 | 说明         | 类型     | 可选值 | 默认值 |
|------|------------|----------|--------|--------|
| line | 默认显示几行 | `number` | —      | 1      |
| col  | 设置分栏目   | `Col`    | —      | true   |

### Query Events

| Name  | Description | Type         |
|-------|-------------|--------------|
| reset | 重置        | `() => void` |
| query | 查询        | `() => void` |

