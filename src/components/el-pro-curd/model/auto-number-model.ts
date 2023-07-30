import { BaseModel } from './base-model'

interface PrevString extends BaseModel {
  数据类型: '自动编号'
  编号类型: '字符串前缀'
  前缀?: string
  最小位数: number
  起始值: number
}
interface PrevDate extends BaseModel {
  数据类型: '自动编号'
  编号类型: '日期前缀'
  日期格式: 'yyyy-MM-dd' | 'MM-dd-yyyy' | 'MM-dd-yy' | 'dd-MM-yy'
  最小位数: number
  起始值: number
}
interface Custom extends BaseModel {
  数据类型: '自动编号'
  编号类型: '自定义'
  格式: string
  起始值: number
}

export type AutoNumberModel = PrevString | PrevDate | Custom
