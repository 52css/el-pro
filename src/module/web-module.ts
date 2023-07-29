import { BaseModule } from './base-module'

export interface WebModule extends BaseModule {
  数据类型: '网址'
  最大长度?: number
  默认值?: string
}
