import { BaseModel } from './base-model'

export interface TextModel extends BaseModel {
  数据类型: '文本'
  格式: '单行文本' | '多行文本'
  最小长度?: number
  最大长度?: number
  默认值?: string
}
