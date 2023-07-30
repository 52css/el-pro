import { BaseModel } from './base-model'

export interface BooleanModel extends BaseModel {
  数据类型: '布尔值'
  默认值?: boolean
}
