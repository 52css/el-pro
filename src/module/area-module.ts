import { BaseModule } from './base-module'

export interface AreaModule extends BaseModule {
  数据类型: '地区'
  地区类型: '省市区' | '省市' | '省'
}
