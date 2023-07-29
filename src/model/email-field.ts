import { BaseField } from './base-field'

export interface EmailField extends BaseField {
  数据类型: '邮箱'
  最大长度?: number
  默认值?: string
}
