---
outline: deep
prev:
  text: 'seo(搜索引擎优化)'
  link: '/seo'
next:
  text: '文档搭建(vitepress)'
  link: '/word'
---
# 埋点

## PV UV

PV 页面的访问量 Page View 就是用户每次对网站访问的记录

UV 指的就是独立访问用户 一个IP 算一次

1.用户行为数据 收集页面的浏览量

2.用户性能评估 页面的加载时间，API调用延时的时间，错误日志

3.设备和环境   用户操作设备 操作系统 浏览器版本

4.用户属性数据 用户的ID 地理位置 用户的角色

总结:收集用户的隐私 优化性能体验 进行A/B业务决策

## 版本号
版本号 1.0.0

第一个整体架构发生了改变

第二个新增功能

第三个修改bug

## 灰度

软件 App 小满科技 1.0.0 -> 2.0.0  都没问题才全量发布

收集用户报错信息，监控

## vite webpack区别

webpack npm run dev 先给你打包一次 webpack 入口文件 js

vite    npm run dev `no bundle模式` 他启动不需要打包 入口文件是html 原生esm

type='module' 可以使用import

type='module' 他会发起http请求  

vite拦截处理里面的逻辑 koa的中间件去拦截了type='module'
vite esbuild开发模式 rollupDown rust版本的rollup babel swc/rust 是babel的70倍

## 调用接口的几种方式

axios fetch xhr 缺点关闭页面的时候接口就停止了

navigator.sendBeacon 优点就是关闭页面 接口也会走完  缺点 不支持跨域 不支持JSON 

## 获取

navigator.userAgent   浏览器信息

