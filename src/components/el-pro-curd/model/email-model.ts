import { BaseModel } from './base-model'

export interface EmailModel extends BaseModel {
  数据类型: '邮箱'
  最大长度?: number
  默认值?: string
}
