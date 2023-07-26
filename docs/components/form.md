# Form 表单

编辑表单右边最宽436px、el-form-item支持col控制分栏数

## 普通表单展示

设置右边最宽436px

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
  <el-pro-form :model="form" label-width="120px" :label-position="labelPosition">
    <el-form-item label="Activity name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-select v-model="form.region" placeholder="please select your zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="Activity time">
      <el-col :span="11">
        <el-date-picker
          v-model="form.date1"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
      <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-time-picker
          v-model="form.date2"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="Instant delivery">
      <el-switch v-model="form.delivery" />
    </el-form-item>
    <el-form-item label="Activity type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="Online activities" name="type" />
        <el-checkbox label="Promotion activities" name="type" />
        <el-checkbox label="Offline activities" name="type" />
        <el-checkbox label="Simple brand exposure" name="type" />
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Resources">
      <el-radio-group v-model="form.resource">
        <el-radio label="Sponsor" />
        <el-radio label="Venue" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Activity form">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
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
```

### Form Attributes

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| col    | 设置分栏目   | `Col`  | —                               | 12 |

### ElFormItem Attributes

| 参数    | 说明   | 类型    | 可选值                                             | 默认值  |
| ------- | ------ | ------- | -------------------------------------------------- | ------- |
| col    | 设置分栏目   | `Col`  | —                               | false |

