import { BaseModule } from './base-module'

export interface FileModule extends BaseModule {
  数据类型: '文件'
  文件最大: number
}
