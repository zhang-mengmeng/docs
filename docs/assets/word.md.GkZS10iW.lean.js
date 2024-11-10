import{V as n}from"./chunks/theme.DxxKsOMB.js";import{c as i,a2 as p,G as l,k as e,o as t}from"./chunks/framework.DD8U72qy.js";const E=JSON.parse('{"title":"搭建文档","description":"","frontmatter":{"outline":"deep","prev":{"text":"埋点","link":"/seo"}},"headers":[],"relativePath":"word.md","filePath":"word.md","lastUpdated":1730128329000}'),h={name:"word.md"},g=Object.assign(h,{setup(k){const a=[{name:"vitePress",title:"Core Team",avatar:"https://vitejs.dev/logo.svg",link:"http://vitejs.dev/"}];return(r,s)=>(t(),i("div",null,[s[0]||(s[0]=p(`<h1 id="搭建文档" tabindex="-1">搭建文档 <a class="header-anchor" href="#搭建文档" aria-label="Permalink to &quot;搭建文档&quot;">​</a></h1><p>vitepress 前身是 vuepress</p><p>vitepress vuepress 静态站点生成器 Static Site Generator (SSG)</p><p>作用于项目(博客，营销页面，档案，文档)</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install vitepress -D</span></span>
<span class="line"><span>通过npx 或者 script 去bin文件夹执行命令</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//在index.md中，每个属性的作用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hero</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;zhangmeng&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //大标题</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;博客&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> //小标题</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  tagline</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 记录每天学习的知识 </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//描述</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //控制按钮 可以增加也可以减少</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  actions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    -</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> theme</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: brand</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: 进入</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">markdown</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">examples</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 控制按钮下面的内容 可以增加也可以减少</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">features</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Feature </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">A</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    details</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Feature </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">B</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    details</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  -</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Feature </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">C</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    details</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: Lorem ipsum dolor sit amet, consectetur adipiscing elit</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">---</span></span></code></pre></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//在config.mts中，每个属性的作用</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">nav </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//导航</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">socialLinks </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 固定的模式 youtube tuitter</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sidebar </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 左侧按钮</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//修改页脚</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> docFooter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;上一页&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;下一页&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 最后更改时间 这个必须配合git才有效 git提交这个文件的时间 它就会被列为最后修改时间</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lastUpdated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;最后更改时间&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      formatOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        dateStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;full&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        timeStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;short&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // 全局搜索</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> search</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      provider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;local&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>在api-examples文件中的各项配置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 上一页 下一页 vitepress特有的formattor 必须是三个横杠 必须写在头部</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>prev:</span></span>
<span class="line"><span>  text:&#39;上一页&#39;,</span></span>
<span class="line"><span>  link:&#39;要跳转的地址&#39;</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>next:</span></span>
<span class="line"><span>  text:&#39;下一页&#39;,</span></span>
<span class="line"><span>  link:&#39;要跳转的地址&#39;</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>head:</span></span>
<span class="line"><span>  - - meta</span></span>
<span class="line"><span>    - name: title</span></span>
<span class="line"><span>      content: Runtime API Examples</span></span>
<span class="line"><span>  - - meta</span></span>
<span class="line"><span>    - name: description</span></span>
<span class="line"><span>      content: Examples of using the runtime APIs provided by VitePress</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## 贡献者</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vitepress的markdown语法支持vue</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { VPTeamMembers } from &quot;vitepress/theme&quot;</span></span>
<span class="line"><span>const members = [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>        name: &#39;vitePress&#39;,</span></span>
<span class="line"><span>        title: &#39;Core Team&#39;,</span></span>
<span class="line"><span>        avatar: &#39;https://vitejs.dev/logo.svg&#39;,</span></span>
<span class="line"><span>        link: &#39;http://vitejs.dev/&#39;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;VPTeamMembers size=&#39;small&#39; :members=&#39;members&#39; /&gt;</span></span></code></pre></div><h2 id="git-部署" tabindex="-1">git 部署 <a class="header-anchor" href="#git-部署" aria-label="Permalink to &quot;git 部署&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> outDir:&#39;docs&#39;, //打包输出的目录</span></span>
<span class="line"><span> base:&quot;/docs/&quot;, //打包的时候带上/docs</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 1.打开仓库的setting</span></span>
<span class="line"><span> 2.点击pages</span></span>
<span class="line"><span> 3.选择branch</span></span>
<span class="line"><span> 4.选择分支 选择docs 点击save 保存</span></span>
<span class="line"><span></span></span>
<span class="line"><span> 访问</span></span>
<span class="line"><span> git名称.github.io/项目名称</span></span></code></pre></div><h2 id="贡献者" tabindex="-1">贡献者 <a class="header-anchor" href="#贡献者" aria-label="Permalink to &quot;贡献者&quot;">​</a></h2><p>vitepress 的 markdown 语法支持 vue</p>`,14)),l(e(n),{size:"small",members:a})]))}});export{E as __pageData,g as default};
