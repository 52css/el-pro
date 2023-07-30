import { BaseModel } from './base-model'
import type { ModelItem } from './index'

export interface ObjectModel extends BaseModel {
  数据类型: '对象'
  数据模型: ModelItem[]
}
