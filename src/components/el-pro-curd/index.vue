<script lang="ts">
export default {
  name: 'ElProCurd'
}
</script>
<script lang="ts" setup>
import { ref, reactive, PropType, toRaw, watch, Ref } from "vue";
import type { FormInstance, FormRules } from 'element-plus'
import ElProForm from '../el-pro-form'
import ElProQuery from '../el-pro-query'
import type { ModelItem } from './model/index'

export type Type = 'list' | 'form' | 'query'

const getModelAndRules = (modelList: ModelItem[] = []) => {
  const defaultModel:any = {}
  const defaultRules:any = {}

  modelList.forEach(module => {
    defaultModel[module.字段标识] = '默认值' in module ? module.默认值 : undefined

    defaultRules[module.字段标识] = []

    let type

    if (module.数据类型 === '数字') {
      type = 'number'
    } else if (module.数据类型 === '布尔值') {
      type = 'boolean'
    } else if (module.数据类型 === '邮箱') {
      type = 'email'
    } else if (module.数据类型 === '网址') {
      type = 'url'
    }

    let pattern

    if (module.数据类型 === '电话' &&  module.格式 === '手机号码') {
      pattern = /^1\d{10}$/
    }

    if (module.是否必填) {
      defaultRules[module.字段标识].push({
        required: true,
        message: `${module.字段名称}不能为空`,
      })
    }

    if (type) {
      defaultRules[module.字段标识].push({
        type,
        message: `${module.字段名称}必须是${module.数据类型}格式`,
      })
    }

    if (pattern) {
      defaultRules[module.字段标识].push({
        pattern,
        message: `${module.字段名称}必须是${module.数据类型}格式`,
      })
    }
  })

  /**
   * {
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
}
   */

  return {
    defaultModel,
    defaultRules
  }
}
const props = defineProps({
  model: {
    type: [Object, Array],
    default: null
  },
  modelList: {
    type: Array as PropType<ModelItem[]>,
    default: []
  },
  type: {
    type: String as PropType<Type>,
    default: 'form'
  }
})
const emit = defineEmits(['submit', 'query', 'reset'])
const { defaultModel, defaultRules } = getModelAndRules(props.modelList)
const formRef = ref<FormInstance>()
const formModel = reactive<any>(toRaw(props.model) || defaultModel)
const formRules = reactive<FormRules>(defaultRules)
const handleSubmit = async () => {
  if (!formRef.value) return

  const valid = await formRef.value.validate()

  if (valid) {
    // console.log('submit!')
    emit('submit', formModel)
  }
}
const handleReset = () => {
  if (!formRef.value) return

  formRef.value?.resetFields()
  emit('reset')
}
const componentMap = {
  form: ElProForm,
  query: ElProQuery
}
const datePickerTypeMap = {
  日期时间: 'datetime',
  日期: 'date',
  时间: 'time',
}

// 如果接口请求完毕，重新更新
watch(() => props.model, (newVal: Ref) => {
  const val = toRaw(newVal.value)
  // console.log('a', a)
  Object.keys(val).forEach(key => {
    formModel[key] = val[key]
  })
}, {deep: true});

</script>
<template>
  <component
    ref="formRef"
    :model="formModel"
    :rules="type === 'form' ? formRules : []"
    :is="componentMap[type]"
    label-width="120px"
    @query="emit('query', toRaw(formModel))"
    @reset="emit('reset')"
  >
    <el-form-item
      v-for="(module, moduleIndex) in modelList"
      :key="moduleIndex"
      :prop="module.字段标识"
      :label="module.字段名称"
    >
      <el-input
        v-if="['文本', '邮箱', '电话', '网址'].includes(module.数据类型)"
        v-model="formModel[module.字段标识]"
        :type="'格式' in module && module.格式 === '多行文本' ? 'textarea' : 'text'"
        :maxlength="'最大长度' in module ? module['最大长度'] : null"
        placeholder="请输入"
        show-word-limit
      />
      <el-switch
        v-else-if="module.数据类型 === '布尔值'"
        v-model="formModel[module.字段标识]"
      />
      <el-input-number
        v-else-if="module.数据类型 === '数字'"
        v-model="formModel[module.字段标识]"
        :precision="module['小数位数'] || 0"
        :min="module['最小值']"
        :max="module['最大值']"
      />
      <template v-else-if="module.数据类型 === '枚举'">
        <el-select-v2
          v-if="module.关联选项集.选项集.length > 5"
          v-model="formModel[module.字段标识]"
          placeholder="请选择"
          :options="module.关联选项集.选项集.map(x => ({label: x.选项标识, value: x.选项值}))"
        />
        <el-checkbox-group v-else-if="module.选择设置 === '多选'" v-model="formModel[module.字段标识]">
          <el-checkbox v-for="(item) in module.关联选项集.选项集"
            :key="item.选项值"
            :label="item.选项值"
          >
            {{ item.选项标识 }}
          </el-checkbox>
        </el-checkbox-group>
        <el-radio-group v-else v-model="formModel[module.字段标识]">
          <el-radio v-for="(item) in module.关联选项集.选项集"
            :key="item.选项值"
            :label="item.选项值"
          >
            {{ item.选项标识 }}
          </el-radio>
          <el-radio label="1">Option 1</el-radio>
        </el-radio-group>
      </template>
      <template v-else-if="module.数据类型 === '日期时间'">
        <el-time-picker
          v-if="module.格式 === '时间'"
          v-model="formModel[module.字段标识]"
          :default-value="module.默认值"
          placeholder="请选择"
        />
        <el-date-picker
          v-else
          v-model="formModel[module.字段标识]"
          :type="datePickerTypeMap[module.格式]"
          :default-time="module.默认值"
          placeholder="请选择"
        />
      </template>
    </el-form-item>
    <el-form-item v-if="type === 'form'">
      <el-button type="primary" @click="handleSubmit">
        保存
      </el-button>
      <el-button @click="handleReset">重置</el-button>
    </el-form-item>
  </component>
</template>