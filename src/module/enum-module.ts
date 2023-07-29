import { BaseModule } from './base-module'

interface EnumItem {
  选项标识: string
  选项值: string
}

interface Enum {
  选项集名称: string
  选项集标识: string
  描述?: string
  选项集: EnumItem[]
}

export interface EnumModule extends BaseModule {
  数据类型: '枚举'
  选择设置: '单选' | '多选'
  关联选项集: Enum
  默认值?: string
}
