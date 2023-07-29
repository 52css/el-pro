import { BaseModel } from './base-model'

export interface WebModel extends BaseModel {
  数据类型: '网址'
  最大长度?: number
  默认值?: string
}
