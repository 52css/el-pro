# Form 表单

编辑表单右边最宽436px、el-form-item支持col控制分栏数

## 普通表单展示

设置右边最宽436px

:::demo

```vue
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  name: string
  region: string
  count: string
  date1: string
  date2: string
  delivery: boolean
  type: string[]
  resource: string
  desc: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: 'Hello',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>
<template>
  <el-pro-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <el-form-item label="Activity name" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="Activity zone" prop="region">
      <el-select v-model="ruleForm.region" placeholder="Activity zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Activity count" prop="count">
      <el-select-v2
        v-model="ruleForm.count"
        placeholder="Activity count"
        :options="options"
      />
    </el-form-item>
    <el-form-item label="Activity time" required>
      <el-col :span="11">
        <el-form-item prop="date1">
          <el-date-picker
            v-model="ruleForm.date1"
            type="date"
            label="Pick a date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </el-form-item>
      </el-col>
      <el-col class="text-center" :span="2">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-form-item prop="date2">
          <el-time-picker
            v-model="ruleForm.date2"
            label="Pick a time"
            placeholder="Pick a time"
            style="width: 100%"
          />
        </el-form-item>
      </el-col>
    </el-form-item>
    <el-form-item label="Instant delivery" prop="delivery">
      <el-switch v-model="ruleForm.delivery" />
    </el-form-item>
    <el-form-item label="Activity type" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="Online activities" name="type" />
        <el-checkbox label="Promotion activities" name="type" />
        <el-checkbox label="Offline activities" name="type" />
        <el-checkbox label="Simple brand exposure" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Resources" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="Sponsorship" />
        <el-radio label="Venue" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Activity form" prop="desc">
      <el-input v-model="ruleForm.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-pro-form>
</template>
```

:::

## 支持分栏

* pro-form 设置 `col`，el-form-item 自动分栏
* el-form-item 设置 `col` 优先级高于 `pro-form 的 col`

:::demo

```vue
<script lang="ts" setup>
import { reactive, ref } from "vue";

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
const labelPosition = ref('right')

const onSubmit = () => {
  console.log("submit!");
};
</script>
<template>
  <el-radio-group v-model="labelPosition" label="label position">
    <el-radio-button label="left">Left</el-radio-button>
    <el-radio-button label="right">Right</el-radio-button>
    <el-radio-button label="top">Top</el-radio-button>
  </el-radio-group>
  <div style="margin: 20px" />
  <el-pro-form :model="form" :label-position="labelPosition" label-width="120px" col>
    <el-form-item label="Activity name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="3">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="3">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="3">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="3">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="3">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="3">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="3">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="3">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="4">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="4">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="4">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="4">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="4">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="4">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="6">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="6">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="6">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity name" col="6">
      <el-input v-model="form.name" />
    </el-form-item>
  </el-pro-form>
</template>
```

:::

## Form API

```ts

// false 不分栏
// true 子根据父宽度自动分栏
// number 设置指定的栏目, 12格拆分
export type Col = boolean | number
export type ColFn = (col: number, el: HTMLElement) => void
export type ValidateFn = (callback?: FormValidateCallback) => Promise<void>
export type ResetFieldsFn = (props?: Arrayable<FormItemProp> | undefined) => void
```

### Form Attributes

| 参数 | 说明       | 类型  | 可选值 | 默认值 |
|------|----------|-------|--------|--------|
| col  | 设置分栏目 | `Col` | —      | 12     |

### Form Event

| Name | Description | Type    |
|------|-------------|---------|
| col  | 设置col值   | `ColFn` |

### Form Exposes

| Name          | Description                                                | Type              |
|---------------|------------------------------------------------------------|-------------------|
| validate      | 对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。 | `validateFn`      |
| resetFields   | 重置该表单项，将其值重置为初始值，并移除校验结果             | `ResetFieldsFn`   |

### ElFormItem Attributes

| 参数 | 说明       | 类型  | 可选值 | 默认值 |
|------|----------|-------|--------|--------|
| col  | 设置分栏目 | `Col` | —      | false  |

