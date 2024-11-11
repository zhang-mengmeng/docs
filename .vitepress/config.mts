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
      { text: '后端', link: '/nest' },
      { text: '优化', link: '/markdown-examples2' },
      { text: '文档', link: '/word' }
    ],

    sidebar: [
      {
        text: '前端',
        items: [
          { text: 'JavaScript',
            items:[
              { text: 'DOM', link: '/fn' },
            ]
           },
           { text: 'TypeScript',
            items:[
              { text: 'Class类', link: '/class' },
            ]
           },
        ]
      },
      {
        text: '后端',
        items: [
          { text: 'nest', link: '/nest.md' },
        ]
      },
      {
        text: '优化',
        items: [
          { text: 'SEO(搜素引擎优化)', link: '/seo.md' },
          { text: '埋点', link: '/maidian.md' },
          { text: 'LRU算法', link: '/lru.md' },
          { text: 'PWA', link: '/pwa.md' },
        ]
      },
      {
        text: '文档',
        items: [
          { text: 'vitepress', link: '/word.md' }
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
