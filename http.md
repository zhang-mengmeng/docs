### 概述

在 HTTP 协议中，请求头和响应头是客户端与服务器通信的重要组成部分。它们包含关于请求或响应的元数据。通常是以键值对的形式出现

### CORS

**CORS**（跨域资源共享）是一种机制，它使用额外的 HTTP 头来告诉浏览器让运行在一个 origin (domain) 上的Web应用被准许访问来自不同源服务器上的指定的资源。当一个资源从与该资源不同的域、协议或端口请求一个资源时，资源会发起一个跨域 HTTP 请求。

#### 同源策略
同源策略是指浏览器限制网页与不同域名、协议、端口的资源进行交互。**同源** 由三部分组成：
  - **协议**：`http`、`https`
  - **域名**：`www.baidu.com`、`www.google.com`
  - **端口**：`80`、`443`
#### CORS 相关 HTTP 头部

|头部|描述|示例|
|---|---|---|
|Access-Control-Allow-Origin|`*` 允许所有域名访问，或者指定具体域名|Access-Control-Allow-Origin: * `Access-Control-Allow-Origin: https://example.com`|
|Access-Control-Allow-Methods|指定允许的方法，如`GET` `POST` `PUT` `DELETE` `PATCH`|指定允许的HTTP请求方法|
|Access-Control-Allow-Headers|允许客户端请求中使用的自定义头部。|Access-Control-Allow-Headers: Content-Type|
|Access-Control-Allow-Credentials|指示是否允许客户端发送带有认证信息（如 Cookies 或 HTTP 认证）到服务器。|`Access-Control-Allow-Credentials`: `true` |
|Access-Control-Expose-Headers|指定哪些响应头可以在浏览器的 JavaScript 中访问。|`Access-Control-Expose-Headers`: `X-Custom-Header`|

#### CORS 预检请求
 - **预检请求的触发条件**
 1. 请求中使用非标准的 `Content-Type`: 如 `application/json`
 2. 请求中包含自定义请求头：如 `X-Custom-Header`。
 3. 请求使用的方法不是简单方法：如 `PUT` `DELETE` `PATCH`。
 - -  简单方法仅包括 `GET`、`POST`（且 `Content-Type` 为 `application/x-www-form-urlencoded`、`multipart/form-data` 或 `text/plain`）

### 自定义响应头
`自定义响应头` 是指服务器在 HTTP 响应中添加的非标准头，用来传递额外的信息，满足应用的特定需求。通过这些头部，服务器可以提供客户端所需的元信息、操作指导或状态信息。

#### 示例自定义响应头
 - **X-Custom-Header**:自定义信息，例如 X-App-Version 用于标记应用的版本。
 - **X-Request-ID**:用来跟踪请求的唯一标识符，便于日志和调试。

#### 示例代码
```javascript

app.post('/post',(req,res)=> {
    res.set('X-Custom-Header','Custom Value')
    res.set('X-Request-ID','123456789')
    res.setHeader('Access-Control-Expose-Headers','X-Custom-Header','X-Request-ID')
    res.send('发送POST请求成功')
})


```