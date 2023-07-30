const options = Array.from({ length: 10000 }).map((_, idx) => ({
  选项值: `${idx + 1}`,
  选项标识: `${idx + 1}`,
}))

export const modelList = [
  {
    字段名称: 'Activity name',
    字段标识: 'name',
    // 字段描述?: string
    是否必填: true,
    // 是否唯一: false,
    数据类型: '文本',
    格式: '单行文本',
    // '最小长度': 0,
    最大长度: 30,
    默认值: 'Hello',
  },
  {
    字段名称: 'Activity count',
    字段标识: 'count',
    // 字段描述?: string
    是否必填: true,
    // 是否唯一: false,
    数据类型: '枚举',
    选择设置: '单选',
    关联选项集: {
      选项集名称: '地区',
      选项集标识: 'dq',
      // 描述?: string
      选项集: options,
    },
    // 默认值?: string
  },
  {
    字段名称: 'Activity time',
    字段标识: 'time',
    // 字段描述?: string
    是否必填: true,
    // 是否唯一: false,
    数据类型: '日期时间',
    格式: '日期时间',
    // 最小值?: string
    // 最大值?: string
    // 默认值?: string
  },
  {
    字段名称: 'Instant delivery',
    字段标识: 'delivery',
    // 字段描述?: string
    // 是否必填: false,
    // 是否唯一: false,
    数据类型: '布尔值',
    // 默认值?: boolean
  },
  {
    字段名称: 'Activity type',
    字段标识: 'type',
    // 字段描述?: string
    是否必填: true,
    // 是否唯一: false,
    数据类型: '枚举',
    选择设置: '多选',
    关联选项集: {
      选项集名称: '类型',
      选项集标识: 'lx',
      // 描述?: string
      选项集: [
        { 选项值: 'Online activities', 选项标识: 'Online activities' },
        { 选项值: 'Promotion activities', 选项标识: 'Promotion activities' },
        { 选项值: 'Offline activities', 选项标识: 'Offline activities' },
        { 选项值: 'Simple brand exposure', 选项标识: 'Simple brand exposure' },
      ],
    },
    // 默认值?: string
  },
  {
    字段名称: 'Resources',
    字段标识: 'resource',
    // 字段描述?: string
    是否必填: true,
    // 是否唯一: false,
    数据类型: '枚举',
    选择设置: '单选',
    关联选项集: {
      选项集名称: '资源',
      选项集标识: 'zy',
      // 描述?: string
      选项集: [
        { 选项值: 'Sponsorship', 选项标识: 'Sponsorship' },
        { 选项值: 'Venue', 选项标识: 'Venue' },
      ],
    },
    // 默认值?: string
  },
  {
    字段名称: 'Activity form',
    字段标识: 'desc',
    // 字段描述?: string
    是否必填: true,
    // 是否唯一: false,
    数据类型: '文本',
    格式: '多行文本',
    // '最小长度': 0,
    最大长度: 100,
    // 默认值?: string
  },
  // {
  //   字段名称: '数字',
  //   字段标识: 'sz',
  //   // 字段描述?: string,
  //   是否必填: true,
  //   // 是否唯一: false,
  //   数据类型: '数字',
  //   小数位数: 2,
  //   最小值: 0,
  //   最大值: 9999999.99,
  //   // 默认值?: number
  // },
  // {
  //   字段名称: '邮箱',
  //   字段标识: 'yx',
  //   // 字段描述?: string
  //   是否必填: true,
  //   // 是否唯一: false,
  //   数据类型: '邮箱',
  //   最大长度: 50,
  //   // 默认值?: string
  // },
  // {
  //   字段名称: '手机号码',
  //   字段标识: 'dhhm',
  //   // 字段描述?: string
  //   是否必填: true,
  //   // 是否唯一: false,
  //   数据类型: '电话',
  //   格式: '手机号码',
  //   最大长度: 11,
  //   // 默认值?: string
  // },
  // {
  //   字段名称: '网址',
  //   字段标识: 'wz',
  //   // 字段描述?: string
  //   是否必填: true,
  //   // 是否唯一: false,
  //   数据类型: '网址',
  //   最大长度: 50,
  //   // 默认值?: string
  // },
]
