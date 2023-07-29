import { BaseField } from './base-field'

interface PrevString extends BaseField {
  数据类型: '自动编号'
  编号类型: '字符串前缀'
  前缀?: string
  最小位数 : number
  起始值: number
}
interface PrevDate extends BaseField {
  数据类型: '自动编号'
  编号类型: '日期前缀'
  日期格式: 'yyyy-MM-dd' | 'MM-dd-yyyy' | 'MM-dd-yy' | 'dd-MM-yy'
  最小位数 : number
  起始值: number
}
interface Custom extends BaseField {
  数据类型: '自动编号'
  编号类型: '自定义'
  格式: string
  起始值: number
}

export type AutoNumberField = PrevString | PrevDate | Custom