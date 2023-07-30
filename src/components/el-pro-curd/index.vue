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

export type Type = 'table' | 'form' | 'query'

const getModelAndRules = (modelList: ModelItem[] = []) => {
  const defaultModel:any = {}
  const defaultRules:any = {}

  modelList.forEach(model => {
    defaultModel[model.字段标识] = '默认值' in model ? model.默认值 : undefined

    defaultRules[model.字段标识] = []

    let type

    if (model.数据类型 === '数字') {
      type = 'number'
    } else if (model.数据类型 === '布尔值') {
      type = 'boolean'
    } else if (model.数据类型 === '邮箱') {
      type = 'email'
    } else if (model.数据类型 === '网址') {
      type = 'url'
    }

    let pattern

    if (model.数据类型 === '电话' &&  model.格式 === '手机号码') {
      pattern = /^1\d{10}$/
    }

    if (model.是否必填) {
      defaultRules[model.字段标识].push({
        required: true,
        message: `${model.字段名称}不能为空`,
      })
    }

    if (type) {
      defaultRules[model.字段标识].push({
        type,
        message: `${model.字段名称}必须是${model.数据类型}格式`,
      })
    }

    if (pattern) {
      defaultRules[model.字段标识].push({
        pattern,
        message: `${model.字段名称}必须是${model.数据类型}格式`,
      })
    }
  })

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
const emit = defineEmits([
  'submit',
  'query',
  'reset',
  'create',
  'edit',
  'delete',
])
const { defaultModel, defaultRules } = getModelAndRules(props.modelList)
const curdModel = reactive<any>(props.model || (props.type === 'table' ? [] : defaultModel))
const formRef = ref<FormInstance>()
const formRules = reactive<FormRules>(defaultRules)
const handleSubmit = async () => {
  if (!formRef.value) return

  const valid = await formRef.value.validate()

  if (valid) {
    // console.log('submit!')
    emit('submit', curdModel)
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
  // 数组是表格
  if (Array.isArray(newVal.value)) {
    newVal.value.forEach((item, index) => {
      curdModel[index] = item
    });
  } else {
    // 表单
    Object.keys(newVal.value).forEach(key => {
      curdModel[key] = newVal.value[key]
    })
  }
}, {deep: true});

</script>
<template>
  <el-pro-table
    v-if="type === 'table'"
    :data="curdModel"
    :fixed="{
      top: 49,
      header: true,
      footer: true,
    }"
    :pagination="{ total: 10, pageSize: 10 }"
  >
    <template v-slot:btn>
      <el-button type="primary" @click="emit('create')"> 新增 </el-button>
    </template>
    <el-table-column
      v-for="(model) in modelList"
      :key="model.字段标识"
      :prop="model.字段标识"
      :label="model.字段名称"
      min-width="128px"
    />
    <el-table-column label="操作">
      <template #default="{ row }">
        <el-pro-operation>
          <el-pro-button type="primary" link @click="emit('edit', row)">
            编辑
          </el-pro-button>
          <el-pro-button
            type="primary"
            link
            confirm="你确定删除吗"
            @confirm="emit('delete', row)">
            删除
          </el-pro-button>
        </el-pro-operation>
      </template>
    </el-table-column>
  </el-pro-table>
  <component
    v-else
    ref="formRef"
    :model="curdModel"
    :rules="type === 'form' ? formRules : []"
    :is="componentMap[type]"
    label-width="120px"
    @query="emit('query', toRaw(curdModel))"
    @reset="emit('reset')"
  >
    <el-form-item
      v-for="model in modelList"
      :key="model.字段标识"
      :prop="model.字段标识"
      :label="model.字段名称"
    >
      <el-input
        v-if="['文本', '邮箱', '电话', '网址'].includes(model.数据类型)"
        v-model="curdModel[model.字段标识]"
        :type="'格式' in model && model.格式 === '多行文本' ? 'textarea' : 'text'"
        :maxlength="'最大长度' in model ? model.最大长度 : null"
        placeholder="请输入"
        show-word-limit
      />
      <el-switch
        v-else-if="model.数据类型 === '布尔值'"
        v-model="curdModel[model.字段标识]"
      />
      <el-input-number
        v-else-if="model.数据类型 === '数字'"
        v-model="curdModel[model.字段标识]"
        :precision="model.小数位数 || 0"
        :min="model.最小值"
        :max="model.最大值"
      />
      <template v-else-if="model.数据类型 === '枚举'">
        <el-select-v2
          v-if="model.关联选项集.选项集.length > 5"
          v-model="curdModel[model.字段标识]"
          :options="model.关联选项集.选项集.map(x => ({label: x.选项标识, value: x.选项值}))"
          :multiple="model.选择设置 === '多选'"
          placeholder="请选择"
        />
        <el-checkbox-group v-else-if="model.选择设置 === '多选'" v-model="curdModel[model.字段标识]">
          <el-checkbox v-for="(item) in model.关联选项集.选项集"
            :key="item.选项值"
            :label="item.选项值"
          >
            {{ item.选项标识 }}
          </el-checkbox>
        </el-checkbox-group>
        <el-radio-group v-else v-model="curdModel[model.字段标识]">
          <el-radio v-for="(item) in model.关联选项集.选项集"
            :key="item.选项值"
            :label="item.选项值"
          >
            {{ item.选项标识 }}
          </el-radio>
          <el-radio label="1">Option 1</el-radio>
        </el-radio-group>
      </template>
      <template v-else-if="model.数据类型 === '日期时间'">
        <el-time-picker
          v-if="model.格式 === '时间'"
          v-model="curdModel[model.字段标识]"
          :default-value="model.默认值"
          placeholder="请选择"
        />
        <el-date-picker
          v-else
          v-model="curdModel[model.字段标识]"
          :type="datePickerTypeMap[model.格式]"
          :default-time="model.默认值"
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