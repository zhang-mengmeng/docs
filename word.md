---
outline: deep
prev:
  text: "埋点"
  link: "/seo"
---

# 搭建文档

vitepress 前身是 vuepress

vitepress vuepress 静态站点生成器 Static Site Generator (SSG)

作用于项目(博客，营销页面，档案，文档)

## 安装

```
npm install vitepress -D
通过npx 或者 script 去bin文件夹执行命令
```

```ts
//在index.md中，每个属性的作用
hero:
  name: "zhangmeng" //大标题
  text: "博客" //小标题
  tagline: 记录每天学习的知识 //描述
  //控制按钮 可以增加也可以减少
  actions:
    - theme: brand
      text: 进入
      link: /markdown-examples
// 控制按钮下面的内容 可以增加也可以减少
features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---
```

```ts
//在config.mts中，每个属性的作用
nav //导航
socialLinks // 固定的模式 youtube tuitter
sidebar // 左侧按钮
//修改页脚
 docFooter:{
      prev:'上一页',
      next:'下一页',
    },

// 最后更改时间 这个必须配合git才有效 git提交这个文件的时间 它就会被列为最后修改时间
lastUpdated:{
      text:'最后更改时间',
      formatOptions:{
        dateStyle:'full',
        timeStyle:'short'
      }
    },
 // 全局搜索
 search:{
      provider:'local'
    },

```

```
在api-examples文件中的各项配置

// 上一页 下一页 vitepress特有的formattor 必须是三个横杠 必须写在头部
---
prev:
  text:'上一页',
  link:'要跳转的地址'
---
---
next:
  text:'下一页',
  link:'要跳转的地址'
---

head:
  - - meta
    - name: title
      content: Runtime API Examples
  - - meta
    - name: description
      content: Examples of using the runtime APIs provided by VitePress
```

```
## 贡献者

vitepress的markdown语法支持vue

<script setup>
import { VPTeamMembers } from "vitepress/theme"
const members = [
    {
        name: 'vitePress',
        title: 'Core Team',
        avatar: 'https://vitejs.dev/logo.svg',
        link: 'http://vitejs.dev/'
    }
]
</script>

<VPTeamMembers size='small' :members='members' />
```

## git 部署

```
 outDir:'docs', //打包输出的目录
 base:"/docs/", //打包的时候带上/docs

 1.打开仓库的setting
 2.点击pages
 3.选择branch
 4.选择分支 选择docs 点击save 保存

 访问
 git名称.github.io/项目名称
```

## 贡献者

vitepress 的 markdown 语法支持 vue

<script setup>
import { VPTeamMembers } from "vitepress/theme"
const members = [
    {
        name: 'vitePress',
        title: 'Core Team',
        avatar: 'https://vitejs.dev/logo.svg',
        link: 'http://vitejs.dev/'
    }
]
</script>

<VPTeamMembers size='small' :members='members' />
