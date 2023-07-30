import { BaseModel } from './base-model'

export interface DateModel extends BaseModel {
  数据类型: '日期时间'
  格式: '日期时间' | '日期' | '时间'
  最小值?: string
  最大值?: string
  默认值?: string
}
