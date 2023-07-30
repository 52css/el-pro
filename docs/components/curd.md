# CURD

一次数据定义，适用于表单、查询、详情、列表等场景。

## 表单

:::demo

```vue
<script lang="ts" setup>
import { reactive } from 'vue'
import { modelList } from './model-list.ts'
const handleSubmit = (val) => {
  console.log('submit', val)
}
const handleReset = () => {
  console.log('reset')
}

const model = reactive({
  // wb: '123',
})

setTimeout(() => {
  console.log('接口请求完毕')
  model.value = {
    name: '啊啊发的发'
  }
}, 1000)

</script>
<template>
  <el-pro-curd
    :model-list="modelList"
    :model="model"
    @submit="handleSubmit"
    @reset="handleReset"
  />
</template>
```

:::

## 查询

:::demo

```vue
<script lang="ts" setup>
import { modelList } from './model-list.ts'
const handleQuery = (val) => {
  console.log('query', val)
}
const handleReset = () => {
  console.log('reset')
}
</script>
<template>
  <el-pro-curd :model-list="modelList" type="query" @query="handleQuery" @reset="handleReset" />
</template>
```

:::

## CURD API

```ts
export type ModelItem = TextModel | BooleanModel | DigitModel | EmailModel | PhoneModel | WebModel

export type Type = 'list' | 'form' | 'query'
```

### Attributes

| 参数    | 说明     | 类型             | 可选值 | 默认值 |
|---------|--------|------------------|--------|--------|
| model-list   | 模型 | `ModelItem[]` | —      | —      |
| type | 展示类型 | `Type`         | —      | —      |

### Form Events

| Name    | Description | Type       |
|---------|-------------|------------|
| submit | 保存事件    | `() => void` |
| reset  | 重置事件    | `() => void` |

### Query Events

| Name    | Description | Type       |
|---------|-------------|------------|
| query | 查询事件    | `() => void` |
| reset  | 重置事件    | `() => void` |