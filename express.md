### 概述

Express 是一个基于 Node.js 平台的轻量级和灵活的 Web 应用框架，用于快速开发 Web 应用和 API。它简化了 Node.js 原生 HTTP 模块的操作，提供了一系列功能丰富的工具来构建服务器端应用。

### 主要特点

- **简单灵活**：提供简单直观的 API 来快速创建 Web 服务器和路由。
- **中间件支持**：支持中间件函数，可扩展功能，如身份验证、日志等。
- **路由功能**：强大的路由系统，支持 HTTP 方法和参数。
- **快速开发**：构建 RESTful API 和后端服务的理想选择。
- **可扩展性**：丰富的第三方中间件和插件生态系统。
- **兼容性**：与 MongoDB、Mongoose、Socket.io 等轻松集成。

### 基本用法

创建一个简单的 Express 应用：

```javascript
import express from 'express';

const app = express();

// request接收客户端的参数，response返回给客户端

// get请求 req.query
app.get('/get', (req, res) => {
  res.send('Hello, World!');
});

// post请求 req.body
app.post('/post', (req, res) => {
  res.send('Hello, World!');
});

// 动态get请求 req.params
app.get('/get/:id', (req, res) => {
  res.send('Hello, World!');
});

// 启动服务器
app.listen(3000, () => {
  console.log(`服务启动成功`);
});

```

### 内置中间件
Express 提供了一些常用的内置中间件，如 express.json() 和 express.urlencoded()。这些用于解析请求体。

```javascript
// 解析 JSON 格式的请求体
app.use(express.json());

// 解析 URL 编码的数据
app.use(express.urlencoded({ extended: true }));

// 提供静态文件
app.use(express.static('public'));

```

### 路由级中间件

```javascript

// user.js
import express from 'express';

const router = express.Router()

router.post('/login', (req, res) => {
    res.json({
        code:200,
        msg:'登陆成功'
    })
})

router.post('/register', (req, res) => {
    res.json({
        code:200,
        msg:'注册成功'
    })
})


export default router

// app.js

import express from "express"

import User from "./user.js"

const app = express()

app.use('/user',User)

app.listen(3000,() =>{
    console.log('服务启动成功')
})
```
### 日志记录 Middleware


**1.引入`log4js`**
```javascript
import log4js from 'log4js';
```
**2.配置 log4js**
```javascript
log4js.configure({
    appenders: {
        out: {
            type: "stdout",  // 定义了一个输出到标准输出（控制台）的日志 appender
            layout: {
                type: "colored"  // 使输出的日志在控制台上显示为彩色，便于区分不同级别
            }
        },
        file: {
            type: "file",  // 定义了一个将日志输出到文件的日志 appender
            filename: "logs/app.log"  // 日志文件路径
        }
    },
    categories: {
        default: {
            appenders: ["out", "file"],  // 指定日志类别使用的 appender 列表
            level: "debug"  // 设置日志级别为 `debug`，可以记录 `debug` 级别及以上的信息
        }
    }
});
```
  - `appenders`: 定义不同的日志输出方式。
    - `out`: 配置一个输出到标准输出（控制台）的 appender，带有彩色布局。
    - `file`: 配置一个输出到文件的 appender，日志文件路径为 `logs/app.log`。
  - `categories`: 定义日志记录的类别。
    - `default`: 这是默认的日志类别，使用 `out` 和 `file` 这两个 appender，并且将日志级别设置为 `debug`，表示记录 `debug` 及以上级别（如 `info`、`warn`、`error`）的日志。

**3.创建 Logger 实例**
  ```javascript
  const logger = log4js.getLogger('default');
  ```
  `log4js.getLogger('default')` 返回配置的 `default` 类别的 logger 实例。该实例将使用配置中定义的 `out` 和 `file` appender，并输出 debug 及以上级别的日志。

**4. 定义日志中间件**
```javascript
const LoggerMiddleware = (req, res, next) => {
    logger.debug(`[${req.method}] ${req.url}`);
    next();
};

```
用于在每次 HTTP 请求时记录日志：
  - `req.method`: 请求的方法，如 `GET`、`POST`。
  - `req.url`: 请求的 URL。
  - `logger.debug`: 记录日志，级别为 `debug`，因此只有在 `debug` 级别及以上时，才会输出日志。