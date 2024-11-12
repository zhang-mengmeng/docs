---
outline: deep
prev:
  text: 'ajax'
  link: '/xhr'
next:
  text: 'websocked'
  link: '/ws'
---

### 概述

**SSE（Server-Sent Events）** 是一种在网页上实现服务器向客户端推送数据的技术。与传统的客户端轮询或 WebSocket 不同，SSE 提供了一种单向的数据流，从服务器推送数据到客户端（浏览器），用于实现实时更新。

### SSE 的特点

1. **单向通信**：SSE 是单向的，服务器可以向客户端发送数据，但客户端无法通过同一连接发送数据回服务器。如果需要双向通信，WebSocket 是更好的选择。
2. **基于 HTTP 协议**：SSE 使用 HTTP 协议来建立连接，因此与现有的 HTTP 基础设施（如防火墙、代理等）兼容性好。
3. **自动重连**：SSE 具有自动重连功能，当连接断开时，浏览器会自动尝试重新连接，确保数据流不中断。
4. **简单实现**：实现 SSE 通信比 WebSocket 更简单，尤其适用于轻量级的实时数据推送。

### SSE 的工作原理

1. **客户端连接**：浏览器通过 JavaScript 创建一个 `EventSource` 对象，向服务器发送 HTTP 请求，建立 SSE 连接。
2. **服务器发送数据**：服务器以纯文本格式连续发送数据，使用 `text/event-stream` 的 MIME 类型。
3. **客户端接收数据**：客户端监听消息并处理接收到的数据。

### SSE 的优点

1. **简单实现**：使用简单，无需复杂的协议或设置即可在客户端和服务器之间实现实时数据流。
2. **浏览器支持**：现代浏览器（如 Chrome、Firefox、Safari）都原生支持 SSE。
3. **自动重连和事件标记**：内置自动重连机制，客户端在连接断开后会自动尝试重连。服务器可以发送 `id` 字段，帮助客户端在重连时恢复状态，避免数据丢失。

### SSE 的局限性

1. **单向通信**：只能从服务器推送数据到客户端，如果需要双向通信（如聊天室、游戏应用），WebSocket 更合适。
2. **浏览器支持**：虽然大多数现代浏览器支持 SSE，但对一些老旧浏览器（如 IE）支持较差。
3. **连接数限制**：浏览器对每个域名的连接数有一定限制，SSE 每个 `EventSource` 占用一个连接。
4. **跨域问题**：SSE 需要处理跨域资源共享（CORS）问题，如果需要跨域访问服务器，需要设置服务器端的 CORS 头。

### SSE 的应用场景

- **实时通知**：如新闻更新、股票价格变化、比赛比分。
- **聊天应用**：适用于轻量级的单向聊天通知。
- **实时数据大屏**

### 基本使用示例

#### 客户端代码

```javascript
const sse = new EventSource("http://localhost:3000/api/sse");
sse.addEventListener("lol", (e) => {
  document.getElementById("message").innerHTML += e.data;
});
```

#### 服务器代码示例（Node.js）

```javascript
app.get("/api/sse", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
  });
  const txt = fs.readFileSync("./index.txt", "utf8");
  const arr = txt.split("");
  let currnet = 0;
  let timer = setInterval(() => {
    if (currnet < arr.length) {
      res.write(`enent: lol\n`);
      res.write(`data:${arr[currnet]}\n\n`);
      currnet++;
    } else {
      clearInterval(timer);
    }
  }, 300);
});
```

### 常用 API

**1.EventSource() 构造函数**

url：String 类型，表示与服务器建立连接的 URL。必填。

options：Object 类型，表示可选参数。常用的可选参数包括：
| 参数名 | 类型 | 描述 |
| ---------- | ------ | --------------------------------------------------------- |
| withCredentials | Boolean 类型 | 表示是否允许发送 Cookie 和 HTTP 认证信息。默认为 false。 |
| headers | Object 类型 | 表示要发送的请求头信息。 |
| retryInterval | Number 类型 | 表示与服务器失去连接后，重新连接的时间间隔。默认为 1000 毫秒。 |

**2.EventSource.readyState 属性**
`readyState` 属性表示当前 `EventSource` 对象的状态，它是一个只读属性，它的值有以下几个：

| 值         | 描述                                             |
| ---------- | ------------------------------------------------ |
| CONNECTING | 表示正在和服务器建立连接。                       |
| OPEN       | 表示已经建立连接，正在接收服务器发送的数据。     |
| CLOSED     | 表示连接已经被关闭，无法再接收服务器发送的数据。 |

**3.EventSource.close() 方法**

`close()` 方法用于关闭 `EventSource` 对象与服务器的连接，停止接收服务器发送的数据。

**4.EventSource.onopen 事件**

`onopen` 事件表示 `EventSource` 对象已经和服务器建立了连接，并开始接收来自服务器的数据。当 `EventSource` 对象建立连接时，触发该事件。

**5. EventSource.onerror 事件**

`onerror` 事件表示在建立连接或接收服务器数据时发生了错误。当出现错误时，触发该事件。

**6. EventSource.onmessage 事件**

`onmessage` 事件表示已经接收到服务器发送的数据，当接收到数据时，触发该事件。