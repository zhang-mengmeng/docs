import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  outDir:'docs', //打包输出的目录
  base:"/docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/markdown-examples' },
      { text: '后端', link: '/markdown-examples1' },
      { text: '优化', link: '/markdown-examples2' }
    ],

    sidebar: [
      {
        text: '前端',
        items: [
          { text: 'JavaScript',
            items:[
              { text: 'Markdown Examples222', link: '/fn' },
            ]
           },
           { text: 'TypeScript',
            items:[
              { text: 'Class类', link: '/class' },
            ]
           },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    docFooter:{
      prev:'上一页',
      next:'下一页',
    },
    lastUpdated:{
      text:'最后更改时间',
      formatOptions:{
        dateStyle:'full',
        timeStyle:'short'
      }
    },
    search:{
      provider:'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
