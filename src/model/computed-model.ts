import { BaseModel } from './base-model'

export interface ComputedModel extends BaseModel {
  数据类型: '计算公式'
  结果类型: '文本' | '日期时间' | '数字'
  计算表达式: string
}
