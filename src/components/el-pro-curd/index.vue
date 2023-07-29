<script lang="ts">
export default {
  name: 'ElProCurd'
}
</script>
<script lang="ts" setup>
import { ref, reactive, PropType } from "vue";
import type { FormInstance, FormRules } from 'element-plus'
import ElProForm from '../el-pro-form'
import ElProQuery from '../el-pro-query'
import { Field } from '../../model/index'

export type Type = 'list' | 'form' | 'query'

const getModelAndRules = (moduleList: Field[] = []) => {
  const model = {}
  const rules = {}

  moduleList.forEach(module => {
    model[module.字段标识] = '默认值' in module ? module.默认值 : undefined

    rules[module.字段标识] = []

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
      rules[module.字段标识].push({
        required: true,
        message: `${module.字段名称}不能为空`,
      })
    }

    if (type) {
      rules[module.字段标识].push({
        type,
        message: `${module.字段名称}必须是${module.数据类型}格式`,
      })
    }

    if (pattern) {
      rules[module.字段标识].push({
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
    model,
    rules
  }
}
const props = defineProps({
  moduleList: {
    type: Array as PropType<Field[]>,
    default: []
  },
  type: {
    type: String as PropType<Type>,
    default: 'form'
  }
})
const emit = defineEmits(['submit', 'reset'])
const ruleFormRef = ref<FormInstance>()
const { model, rules } = getModelAndRules(props.moduleList)
const ruleForm = reactive(model)
const ruleRules = reactive<FormRules>(rules)
const handleSubmit = async () => {
  if (!ruleFormRef.value) return

  const valid = await ruleFormRef.value.validate()

  if (valid) {
    // console.log('submit!')
    emit('submit', ruleForm)
  }
}
const handleReset = () => {
  if (!ruleFormRef.value) return

  ruleFormRef.value?.resetFields()
  emit('reset')
}
</script>
<template>
  <el-pro-form
    v-if="type === 'form'"
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="ruleRules"
    label-width="120px"
  >
    <el-form-item
      v-for="(module, moduleIndex) in moduleList"
      :key="moduleIndex"
      :prop="module.字段标识"
      :label="module.字段名称"
    >
      <el-input
        v-if="['文本', '邮箱', '电话', '网址'].includes(module.数据类型)"
        v-model="ruleForm[module.字段标识]"
        :type="'格式' in module && module.格式 === '多行文本' ? 'textarea' : 'text'"
        :maxlength="module['最大长度']"
        show-word-limit
      />
      <el-switch
        v-if="module.数据类型 === '布尔值'"
        v-model="ruleForm[module.字段标识]"
      />
      <el-input-number
        v-if="module.数据类型 === '数字'"
        v-model="ruleForm[module.字段标识]"
        :precision="module['小数位数'] || 0"
        :min="module['最小值']"
        :max="module['最大值']"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">
        保存
      </el-button>
      <el-button @click="handleReset">重置</el-button>
    </el-form-item>
  </el-pro-form>
  <el-pro-query
    v-if="type === 'query'"
    ref="ruleFormRef"
    :model="ruleForm"
    label-width="120px"
  >
    <el-form-item
      v-for="(module, moduleIndex) in moduleList"
      :key="moduleIndex"
      :prop="module.字段标识"
      :label="module.字段名称"
    >
      <el-input
        v-if="['文本', '邮箱', '电话', '网址'].includes(module.数据类型)"
        v-model="ruleForm[module.字段标识]"
        :type="'格式' in module && module.格式 === '多行文本' ? 'textarea' : 'text'"
        :maxlength="module['最大长度']"
        show-word-limit
      />
      <el-switch
        v-if="module.数据类型 === '布尔值'"
        v-model="ruleForm[module.字段标识]"
      />
      <el-input-number
        v-if="module.数据类型 === '数字'"
        v-model="ruleForm[module.字段标识]"
        :precision="module['小数位数'] || 0"
        :min="module['最小值']"
        :max="module['最大值']"
      />
    </el-form-item>
  </el-pro-query>
</template>