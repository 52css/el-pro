<script lang="ts">
export default {
  name: 'ElProCurd'
}
</script>
<script lang="ts" setup>
import { ref, reactive, PropType } from "vue";
import type { FormInstance, FormRules } from 'element-plus'
import ElProForm from '../el-pro-form'
import { Field } from '../../model/index'

const getModelAndRules = (moduleList: Field[] = []) => {
  const model = {}
  const rules = {}

  moduleList.forEach(module => {
    model[module.字段标识] = '默认值' in module ? module.默认值 : undefined

    rules[module.字段标识] = []

    if (module.是否必填) {
      rules[module.字段标识].push({
        type: 'string',
        required: true,
        message: `${module.字段名称}不能为空`,
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
    type: String,
    default: 'form' // list\form
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
        v-if="module.数据类型 === '文本'"
        v-model="ruleForm[module.字段标识]"
        :type="module.格式 === '多行文本' ? 'textarea' : 'text'"
        :maxlength="module['最大长度（字节）']"
        show-word-limit
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSubmit">
        保存
      </el-button>
      <el-button @click="handleReset">重置</el-button>
    </el-form-item>
  </el-pro-form>
</template>