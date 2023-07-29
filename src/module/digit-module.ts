import { BaseModule } from './base-module'

export interface DigitModule extends BaseModule {
  数据类型: '数字'
  小数位数?: number
  最小值?: number
  最大值?: number
  默认值?: number
}
