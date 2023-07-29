import { BaseModule } from './base-module'
import type { Module } from './index'

export interface ObjectModule extends BaseModule {
  数据类型: '对象'
  数据模型: Module[]
}
