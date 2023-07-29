import { BaseField } from './base-field'

export interface FileField extends BaseField {
  数据类型: '文件'
  文件最大: number
}
