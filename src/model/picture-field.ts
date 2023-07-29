import { BaseField } from './base-field'

export interface PictureField extends BaseField {
  数据类型: '图片'
  单张图片最大: number
}