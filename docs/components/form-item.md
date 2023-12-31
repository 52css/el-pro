# FormItem 表单项

## 基础用法

动态表单组件，通过配置表单项，生成表单

:::demo

```vue
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import {createFormItem} from '../../src/components/el-pro-form-item/create-form-item.ts'
import type { FormInstance, FormRules } from 'element-plus'

const formModel = reactive({
  test1: '',
  test2: 'test2-1',
  test3: ['test3-1', 'test3-2'],
  test4: 'test4-1'
})
const item1 = createFormItem(
  'input',
  {
    label: 'test1',
    prop: 'test1',
    rules: [{
      required: true,
      message: 'test1不能为空',
      trigger: 'blur',
    }]
  },
  (current) => (formModel[current.payload.prop] === 'test1' ? item2 : item3)
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
  },
  (current) => {
    if (formModel[current.payload.prop] === 'test2-2') {
      return item3
    } else if (formModel[current.payload.prop] === 'test2-3') {
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
  },
  (current) => {
    return formModel[current.payload.prop].includes('test3-1') ? item4 : null
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
})
let formState = item1;
const formRef = ref()
const getFormModel = (formState, formModel) =>  {
  const model = {};
  let current = formState;
  let prevFormState;

  while(current) {
    const {payload} = current
    model[payload.prop] = formModel[payload.prop]

    const acients = [];
    prevFormState = current

    acients.unshift(prevFormState);

    while ((prevFormState = prevFormState.parent)) {
      acients.unshift(prevFormState);
    }

    current = current.next(current, acients)
  }

  return model;
}
const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      const model = getFormModel(formState, formModel)
      console.log('submit!', model)
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>
<template>
  <el-pro-form ref="formRef" :model="formModel" label-width="150px">
    <el-pro-form-item :form-state="formState" :form-model="formModel" />
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">
        获取model
      </el-button>
    </el-form-item>
  </el-pro-form>
</template>
```

:::
