import { BaseModel } from './base-model'

export interface AreaModel extends BaseModel {
  数据类型: '地区'
  地区类型: '省市区' | '省市' | '省'
}
