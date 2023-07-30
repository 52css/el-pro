import { BaseModel } from './base-model'

export interface FileModel extends BaseModel {
  数据类型: '文件'
  文件最大: number
}
