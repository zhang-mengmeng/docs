---
outline: deep
prev:
  text: 'Class类'
  link: '/class'
next:
  text: 'ajax'
  link: '/xhr'
---

### 概述

**Fetch API** 是一种现代化的浏览器 API，用于在客户端进行网络请求。它提供了一种更简单、更灵活的方式来替代传统的 `XMLHttpRequest` 对象，从而实现更直观和可读的代码。

### Fetch API 的主要特点

1. **基于 Promise**：Fetch API 使用 Promises（承诺对象），使异步请求的编写和处理更加简洁和易于阅读。相比于 `XMLHttpRequest` 的回调结构，Promise 提供了更强的可读性和链式调用方式。
2. **简洁的语法**：使用 Fetch API 编写的代码更加简明，减少了复杂性。
3. **响应处理**：Fetch API 将网络请求的响应处理分为两个步骤：一是检查请求是否成功，二是处理数据。这与 `XMLHttpRequest` 相比更清晰。

### Fetch API 的优点

1. **基于 Promise**：使得代码结构清晰，避免了回调地狱。
2. **灵活的响应处理**：Fetch 支持多种格式的响应（如 JSON、Blob、文本）。
3. **更好的错误处理**：使用 `.catch()` 可以简便地捕获网络和解析错误。
4. **扩展性**：Fetch API 支持高级功能，如请求超时控制和流式处理。

### Fetch API 的局限性

1. **错误处理**：Fetch API 不会自动将 HTTP 状态码视为错误。必须手动检查 `response.ok`，否则状态码为 404 或 500 这样的错误不会触发 `.catch()`。
2. **浏览器兼容性**：Fetch API 已被大多数现代浏览器支持，但在某些旧浏览器（如 IE）上不受支持，需要使用 polyfill 解决。
3. **没有进度事件**：不像 `XMLHttpRequest`，Fetch API 不直接支持文件上传的进度事件，需要其他方法来实现文件上传进度条。

### 常见应用场景

- **获取数据**：从服务器获取 JSON 数据、HTML、XML 等。
- **发送数据**：用 `POST`、`PUT` 等方法发送表单数据或更新资源。
- **与第三方 API 交互**：Fetch 非常适合通过 REST API 获取外部数据。

### 进阶特性

- **Request 和 Response 对象**：Fetch 使用 `Request` 和 `Response` 对象来代表网络请求和响应，提供了对请求和响应的详细控制。
- **流式读取**：支持读取数据流，允许开发者逐步处理大数据集。

### fetch 返回格式解释：

| 格式          | 描述                                                |
| ------------- | --------------------------------------------------- |
| text()        | 将响应体解析为纯文本字符串并返回                    |
| json()        | 将响应体解析为 JSON 格式并返回一个 javascript 对象  |
| blob()        | 将响应体解析为二进制数据并返回一个 Blob 对象        |
| arrayBuffer() | 将响应体解析为二进制数据并返回一个 ArrayBuffer 对象 |
| formData()    | 将响应体解析为 FormDate 对象                        |

### fetch 基本使用示例

#### get 请求

```javascript
// 第一个参数url 默认是get请求 返回值是一个Promise对象
fetch("https://www.baidu.com")
  // 返回一个response对象
  .then((response) => response.text())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
```

#### post 请求

```javascript
fetch("https://www.baidu.com", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "xiaoming",
    age: 18,
  }),
})
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  });
```

#### 进度条

```javascript
fetch("https://www.baidu.com")
  .then(async (res) => {
    const total = res.headers.get("content-length");
    const reafer = res.body.getReafer();
    let loaded = 0;
    while (true) {
      const { done, value } = await reafer.next();
      if (done) break;
      loaded += value.length;
      console.log(`进度：${loaded / total}`);
    }
  })
  .then((res) => {});
```

#### 取消请求

```javascript
let controller = new AbortController();
let signal = controller.signal;

fetch("https://www.baidu.com", { signal })
  .then((response) => response.text())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// 取消请求
controller.abort();
```

#### 请求超时

```javascript
let controller = new AbortController();
let signal = controller.signal;

fetch("https://www.baidu.com", { signal })
  .then((response) => response.text())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

const timeoutFn = (time = 5000) => {
  setTimeout(() => {
    // 取消请求
    controller.abort();
  }, time);
};

timeoutFn();
```
