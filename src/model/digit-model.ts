import { BaseModel } from './base-model'

export interface DigitModel extends BaseModel {
  数据类型: '数字'
  小数位数?: number
  最小值?: number
  最大值?: number
  默认值?: number
}
