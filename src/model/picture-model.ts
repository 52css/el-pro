import { BaseModel } from './base-model'

export interface PictureModel extends BaseModel {
  数据类型: '图片'
  单张图片最大: number
}
