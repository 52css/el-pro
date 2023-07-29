import { BaseModel } from './base-model'

export interface RelativeModel extends BaseModel {
  数据类型: '关联关系'
  关联模型: string
  关联类型: '1对1' | '多对1'
}
