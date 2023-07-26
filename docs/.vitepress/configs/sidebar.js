export default {
  '/api/': getApiSidebar(),
  '/components/': getComponentsSidebar(),
  '/guide/': getGuideSidebar(),
}

function getApiSidebar() {
  return [
    {
      text: '功能',
      collapsible: true,
      items: [
        {
          text: '已实现',
          link: '/api/',
        },
      ],
    },
  ]
}

function getComponentsSidebar() {
  return [
    {
      text: '组件',
      items: [
        {
          text: 'Button 按钮',
          link: '/components/button',
        },
        {
          text: 'Form 表单',
          link: '/components/form',
        },
        {
          text: 'Query 查询',
          link: '/components/query',
        },
        {
          text: 'Table 表格',
          link: '/components/table',
        },
        {
          text: 'Operation 操作',
          link: '/components/operation',
        },
      ],
    },
  ]
}

function getGuideSidebar() {
  return [
    {
      text: '指南',
      items: [
        {
          text: '安装',
          link: '/guide/',
        },
      ],
    },
  ]
}
