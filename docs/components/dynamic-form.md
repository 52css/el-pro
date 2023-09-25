# DynamicForm 动态表单

## 基础用法

动态表单组件，通过配置表单项，生成表单

:::demo

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import formState from '../../src/components/el-pro-dynamic-form/form-state.ts'
const ruleFormRef = ref()
const submitForm = async () => {
  console.log('formState', formState)
}
</script>
<template>
  <el-form>
    <el-pro-dynamic-form :form-state="formState"/>
    <el-form-item>
      <el-button type="primary" @click="submitForm">
        Create
      </el-button>
    </el-form-item>
  </el-form>
</template>
```

:::
