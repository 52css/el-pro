import { BaseField } from './base-field'

export interface RelativeField extends BaseField {
  数据类型: '关联关系'
  关联模型: string
  关联类型: '1对1' | '多对1'
}
