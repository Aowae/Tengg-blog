import { defineConfig } from 'vitepress'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang:'zh-CN',
  title: "Tengg博客",
  description: "Tengg的成长之路，包含前端常用知识、源码阅读笔记、各种奇淫技巧、日常提效工具等",

  lastUpdated:true,
  cleanUrls:true,

  // markdown配置
  markdown:{
    lineNumbers:true
  },

  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    i18nRouting: false,

    logo: "../public/logo.png",
    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
