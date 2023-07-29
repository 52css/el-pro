import { BaseModule } from './base-module'

export interface PhoneModule extends BaseModule {
  数据类型: '电话'
  格式: '手机号码' | '固定电话'
  最大长度?: number
  默认值?: string
}