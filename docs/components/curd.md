# CURD

## 表单

:::demo

```vue
<script lang="ts" setup>
const moduleList = [
  {
    字段名称: '文本',
    字段标识: 'wb',
    // 字段描述?: string
    是否必填: true,
    // 是否唯一: false,
    数据类型: '文本',
    格式: '单行文本',
    // '最小长度': 0,
    '最大长度': 30,
    // 默认值?: string
  },
  {
    字段名称: '多行文本',
    字段标识: 'dhwb',
    // 字段描述?: string
    是否必填: false,
    // 是否唯一: false,
    数据类型: '文本',
    格式: '多行文本',
    // '最小长度': 0,
    '最大长度': 100,
    // 默认值?: string
  },
  {
    字段名称: '布尔值',
    字段标识: 'bez',
    // 字段描述?: string
    是否必填: false,
    // 是否唯一: false,
    数据类型: '布尔值',
    // 默认值?: boolean
  },
  {
    字段名称: '数字',
    字段标识: 'sz',
    // 字段描述?: string,
    是否必填: true,
    // 是否唯一: false,
    数据类型: '数字',
    小数位数: 2,
    最小值: 0,
    最大值: 9999999.99,
    // 默认值?: number
  },
  {
    字段名称: '邮箱',
    字段标识: 'yx',
    // 字段描述?: string
    是否必填: true,
    // 是否唯一: false,
    数据类型: '邮箱',
    '最大长度': 50,
    // 默认值?: string
  },
  {
    字段名称: '手机号码',
    字段标识: 'dhhm',
    // 字段描述?: string
    是否必填: true,
    // 是否唯一: false,
    数据类型: '电话',
    格式: '手机号码',
    最大长度: 11,
    // 默认值?: string
  },
  {
    字段名称: '网址',
    字段标识: 'wz',
    // 字段描述?: string
    是否必填: true,
    // 是否唯一: false,
    数据类型: '网址',
    最大长度: 50,
    // 默认值?: string
  },
]
const handleSubmit = (val) => {
  console.log('submit', val)
}
const handleReset = () => {
  console.log('reset')
}
</script>
<template>
  <el-pro-curd :module-list="moduleList" @submit="handleSubmit" @reset="handleReset" />
</template>
```

:::

## CURD API

### Attributes

| 参数    | 说明     | 类型             | 可选值 | 默认值 |
|---------|--------|------------------|--------|--------|
| click   | 点击事件 | `Async Function` | —      | —      |
| confirm | 操作确认 | `string`         | —      | —      |

### Events

| Name    | Description | Type       |
|---------|-------------|------------|
| confirm | 确定事件    | `() => void` |
| cancel  | 取消事件    | `() => void` |
