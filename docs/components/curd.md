# CURD

一次数据定义，适用于表单、查询、详情、列表等场景。

## 定义

```ts
const options = Array.from({ length: 10000 }).map((_, idx) => ({
  选项值: `${idx + 1}`,
  选项标识: `${idx + 1}`,
}))

export const modelList = [
  {
    字段名称: 'Activity name',
    字段标识: 'name',
    // 字段描述?: string
    是否必填: true,
    // 是否唯一: false,
    数据类型: '文本',
    格式: '单行文本',
    // '最小长度': 0,
    最大长度: 30,
    默认值: 'Hello',
  },
  {
    字段名称: 'Activity count',
    字段标识: 'count',
    // 字段描述?: string
    是否必填: true,
    // 是否唯一: false,
    数据类型: '枚举',
    选择设置: '单选',
    关联选项集: {
      选项集名称: '地区',
      选项集标识: 'dq',
      // 描述?: string
      选项集: options,
    },
    // 默认值?: string
  },
  {
    字段名称: 'Activity time',
    字段标识: 'time',
    // 字段描述?: string
    是否必填: true,
    // 是否唯一: false,
    数据类型: '日期时间',
    格式: '日期时间',
    // 最小值?: string
    // 最大值?: string
    // 默认值?: string
  },
  {
    字段名称: 'Instant delivery',
    字段标识: 'delivery',
    // 字段描述?: string
    // 是否必填: false,
    // 是否唯一: false,
    数据类型: '布尔值',
    // 默认值?: boolean
  },
  {
    字段名称: 'Activity type',
    字段标识: 'type',
    // 字段描述?: string
    是否必填: true,
    // 是否唯一: false,
    数据类型: '枚举',
    选择设置: '多选',
    关联选项集: {
      选项集名称: '类型',
      选项集标识: 'lx',
      // 描述?: string
      选项集: [
        { 选项值: 'Online activities', 选项标识: 'Online activities' },
        { 选项值: 'Promotion activities', 选项标识: 'Promotion activities' },
        { 选项值: 'Offline activities', 选项标识: 'Offline activities' },
        { 选项值: 'Simple brand exposure', 选项标识: 'Simple brand exposure' },
      ],
    },
    // 默认值?: string
  },
  {
    字段名称: 'Resources',
    字段标识: 'resource',
    // 字段描述?: string
    是否必填: true,
    // 是否唯一: false,
    数据类型: '枚举',
    选择设置: '单选',
    关联选项集: {
      选项集名称: '资源',
      选项集标识: 'zy',
      // 描述?: string
      选项集: [
        { 选项值: 'Sponsorship', 选项标识: 'Sponsorship' },
        { 选项值: 'Venue', 选项标识: 'Venue' },
      ],
    },
    // 默认值?: string
  },
  {
    字段名称: 'Activity form',
    字段标识: 'desc',
    // 字段描述?: string
    是否必填: true,
    // 是否唯一: false,
    数据类型: '文本',
    格式: '多行文本',
    // '最小长度': 0,
    最大长度: 100,
    // 默认值?: string
  },
]
```

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

## 表格

:::demo

```vue
<script lang="ts" setup>
import { modelList } from './model-list.ts'
const handleCreate = () => {
  console.log('create')
}
const handleEdit = (row) => {
  console.log('edit', row)
}
const handleDelete = (row) => {
  console.log('delete', row)
}
</script>
<template>
  <el-pro-curd
    :model-list="modelList"
    type="table"
    @create="handleCreate"
    @edit="handleEdit"
    @delete="handleDelete"
  />
</template>
```

:::

## CURD API

```ts
export type ModelItem =
  | TextModel
  | BooleanModel
  | DigitModel
  | EmailModel
  | PhoneModel
  | WebModel
  | EnumModel
  | DateModel


export type Type = 'table' | 'form' | 'query'
```

### Attributes

| 参数       | 说明     | 类型             | 可选值 | 默认值 |
|------------|--------|------------------|--------|--------|
| model      | 数据     | `Object` `Array` | —      | —      |
| model-list | 模型     | `ModelItem[]`    | —      | —      |
| type       | 展示类型 | `Type`           | —      | —      |

### Form Events

| Name   | Description | Type         |
|--------|-------------|--------------|
| submit | 保存事件    | `() => void` |
| reset  | 重置事件    | `() => void` |

### Query Events

| Name  | Description | Type         |
|-------|-------------|--------------|
| query | 查询事件    | `() => void` |
| reset | 重置事件    | `() => void` |

### Table Events

| Name  | Description | Type         |
|-------|-------------|--------------|
| create | 新增    | `() => void` |
| edit | 编辑    | `(row) => void` |
| delete | 删除    | `(row) => void` |
| detail | 详情    | `(row) => void` |