---
outline: deep
prev:
  text: 'websocked'
  link: '/ws'
next:
  text: 'seo(搜索引擎优化)'
  link: '/seo'
---
# nest

## nuxtjs nextjs nestjs 区别

nuxtjs 是 Vue 的 SSR 框架

nextjs 是 React 的 SSR 框架

nestjs 是 Angular 的 SSR 框架

可以做 SSR 也可以做 server

nestjs 用的比较少的原因是没人带自己学比较难，Angular 国内又太少了

nestjs 跟 java springboot 一样的 人称小 spring

nestjs 是用 webpack 去构建的

nestjs 基于 Angular rxjs promise express fastify 组合而成

默认使用的是 express，一秒钟一万多请求，可以切换 fastify，一秒钟约等于五万请求。

一般的业务使用 express，网关层使用的是 fastify

"$schema": "https://json.schemastore.org/nest-cli", 为 JSON 文件生成代码提示

## 装饰器

装饰器有四种 类装饰器 属性装饰器 方法装饰器 参数装饰器

在不修改 class 内部代码的基础上为之添加功能，在装饰器上可以拿到类的 prototype

不破坏原有的代码而为其添加功能

## 代码解释

```ts
//一启动项目项目就会执行
//MVC M Module V view视图层 C controllers路由
@Module({
  imports: [], //启动模块
  controllers: [AppController], //路由
  providers: [AppService], //逻辑层
})
@Controller() //控制路由的名字
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //get请求
  getHello(): string {
    return this.appService.getHello();
  }
}
```

## 命令解释

```
nest g --help 查看所有命令
    │ application   │ 在创建一个nest项目，并且通过workspace去关联起来
    │ class         │ 创建一个类
    │ configuration │ 创建配置文件
    │ controller    │ 创建controller文件
    │ decorator     │ 创建自定义装饰器
    │ filter        │ 创建过滤器
    │ gateway       │ 创建网关层的demo
    │ guard         │ 守卫
    │ interceptor   │ nest的拦截器，所有的出入口都会经过
    │ interface     │ 创建声明文件
    │ library       │ 开发库模式 非业务的功能
    │ middleware    │ 中间键 跟express一样
    │ module        │ mo          │ Generate a module declaration                │
    │ pipe          │ 管道
    │ provider      │ 依赖注入
    │ resolver      │ GraphQL 写代码的风格，比较老，会增加前端的工作量，前端需要查什么需要在自己写
    │ resource      │ 帮我快速编写resource风格
    │ service       │ 创建逻辑层文件
    │ sub-app       │ 创建子应用，相当于微前端
```

## 文件分层
```
dto //对象管理层 对象转换层
create-user.dto.ts // 创建验证
update-user.dto //更改验证 通过PartialType让里面的参数非必填
entities //实体层 创建数据表
```
## uuid和cuid的区别
uuid 通过mac地址 + 随机数 + 时间戳 生成 分布式集群管理

cuid web开发者推荐 轻量级 唯一 高效 安全 无敌


