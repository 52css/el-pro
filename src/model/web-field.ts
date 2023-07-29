import { BaseField } from './base-field'

export interface WebField extends BaseField {
  数据类型: '网址'
  最大长度?: number
  默认值?: string
}
