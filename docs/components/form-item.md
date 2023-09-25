# FormItem 动态表单

## 基础用法

动态表单组件，通过配置表单项，生成表单

:::demo

```vue
<script lang="ts" setup>
import { ref } from 'vue'
import {createFormItem} from '../../src/components/el-pro-form-item/create-form-item.ts'

const item1 = createFormItem(
  'input',
  {
    label: 'test1',
    prop: 'test1',
    value: '',
  },
  (current) => (current.payload.value === 'test1' ? item2 : item3)
)
const item2 = createFormItem(
  'select',
  {
    label: 'test2',
    prop: 'test2',
    options: [
      {
        label: 'test2-1',
        value: 'test2-1',
      },
      {
        label: 'test2-2',
        value: 'test2-2',
      },
      {
        label: 'test2-3',
        value: 'test2-3',
      },
    ],
    value: 'test2-1',
  },
  (current) => {
    if (current.payload.value === 'test2-2') {
      return item3
    } else if (current.payload.value === 'test2-3') {
      return item4
    }
    return null
  }
)
const item3 = createFormItem(
  'checkbox',
  {
    label: 'test3',
    prop: 'test3',
    options: [
      {
        label: 'test3-1',
        value: 'test3-1',
      },
      {
        label: 'test3-2',
        value: 'test3-2',
      },
      {
        label: 'test3-3',
        value: 'test3-3',
      },
    ],
    value: ['test3-1', 'test3-2'],
  },
  (current) => {
    return current.payload.value.includes('test3-1') ? item4 : null
  }
)
const item4 = createFormItem('radio', {
  label: 'test4',
  prop: 'test4',
  options: [
    {
      label: 'test4-1',
      value: 'test4-1',
    },
    {
      label: 'test4-2',
      value: 'test4-2',
    },
    {
      label: 'test4-3',
      value: 'test4-3',
    },
  ],
  value: 'test4-1',
})
let formState = item1;
const ruleFormRef = ref()
const submitForm = async () => {
  const model = {};
  let current = item1;
  let prevFormState;

  while(current) {
    // console.log('current', current)
    const {payload} = current
    model[payload.prop] = payload.value

    const acients = [];
    prevFormState = current

    acients.unshift(prevFormState);

    while ((prevFormState = prevFormState.parent)) {
      // console.log('prevFormState', prevFormState)
      acients.unshift(prevFormState);
    }

    // console.log('acients', acients)

    current = current.next(current, acients)

    // console.log('current', current)
  }

  console.log('model', model)
  // console.log('formState', formState)
}
</script>
<template>
  <el-pro-form>
    <el-pro-form-item :form-state="formState"/>
    <el-form-item>
      <el-button type="primary" @click="submitForm">
        获取model
      </el-button>
    </el-form-item>
  </el-pro-form>
</template>
```

:::
