import { BaseModule } from './base-module'

export interface EmailModule extends BaseModule {
  数据类型: '邮箱'
  最大长度?: number
  默认值?: string
}
