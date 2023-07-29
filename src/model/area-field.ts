import { BaseField } from './base-field'

export interface AreaField extends BaseField {
  数据类型: '地区'
  地区类型: '省市区' | '省市' | '省'
}
