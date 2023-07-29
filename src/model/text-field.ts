import { BaseField } from './base-field'

export interface TextField extends BaseField {
  数据类型: '文本'
  格式: '单行文本' | '多行文本'
  '最小长度（字节）'?: number
  '最大长度（字节）'?: number
  默认值?: string
}
