import { BaseField } from './base-field'
import type { Field } from './index'

export interface ObjectField extends BaseField {
  数据类型: '对象',
  数据模型: Field[],
}
