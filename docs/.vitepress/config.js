import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import nav from './configs/nav'
import sidebar from './configs/sidebar'

export default defineConfig({
  // lang: 'en-US',
  title: 'El Pro',
  description: 'Element-ui组件加强版本',

  lastUpdated: true,
  cleanUrls: true,

  base: process.env.BASE || '/',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]],

  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },

    config: (md) => {
      md.use(demoblockPlugin, {
        customClass: 'demoblock-custom',
      })
    },
  },

  vite: {
    plugins: [demoblockVitePlugin(), vueJsx()],
    resolve: {
      alias: {
        '@alias': path.resolve(__dirname, '../'),
      },
    },
  },

  // vue: {},

  themeConfig: {
    outlineTitle: '本页目录',
    lastUpdatedText: '上次更新',
    logo: '/logo.svg',

    search: {
      provider: 'local',
      // provider: 'algolia',
      // options: {
      //   appId: 'X51HWTCQJJ',
      //   apiKey: 'ca20f15eb8a667898b65d13f4213ae3d',
      //   indexName: 'el-pro'
      // }
    },

    // nav
    nav,

    // sidebar
    sidebar,

    editLink: {
      pattern: 'https://github.com/52css/el-pro/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页',
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/52css/el-pro' }],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present 君惜',
    },
  },
})
