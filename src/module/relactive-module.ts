import { BaseModule } from './base-module'

export interface RelativeModule extends BaseModule {
  数据类型: '关联关系'
  关联模型: string
  关联类型: '1对1' | '多对1'
}
