import { BaseModel } from './base-model'

export interface PhoneModel extends BaseModel {
  数据类型: '电话'
  格式: '手机号码' | '固定电话'
  最大长度?: number
  默认值?: string
}
