---
outline: deep
prev:
  text: 'sse'
  link: '/sse'
next:
  text: 'nest'
  link: '/nest'
---

### 概述

**WebSocket** 是一种用于在客户端和服务器之间建立双向通信的协议。它使得数据可以在客户端和服务器之间全双工、实时地进行传输。WebSocket 是 HTML5 的一部分，与传统的 HTTP 请求/响应模型不同，它在单个 TCP 连接上提供了全双工通信。

### WebSocket 的主要特点

1. **双向通信**：客户端和服务器可以在同一连接上互相发送数据，支持实时双向数据流。
2. **低延迟**：由于连接保持开放，不需要不断建立和断开连接，因此延迟显著降低。
3. **持续连接**：在初始握手完成后，WebSocket 连接保持开放状态，不像 HTTP 一样每次请求都需要新的连接。
4. **基于事件**：支持事件驱动的数据处理，使应用可以在数据到达时实时响应。

### WebSocket 的工作原理

1. **初始握手**：WebSocket 连接通过标准 HTTP/HTTPS 请求发起，客户端向服务器发送 `Upgrade` 请求，要求将协议升级到 WebSocket。
2. **协议升级**：如果服务器支持 WebSocket，会返回一个响应来确认协议升级。
3. **数据传输**：一旦握手完成，客户端和服务器之间的连接就变为全双工，允许双方随时发送数据，数据通过帧格式进行封装。
4. **保持连接**：连接保持打开状态，直到客户端或服务器主动关闭。

### WebSocket 的优点

1. **实时性**：由于连接是持久的，数据可以实时传输，适合需要快速更新的应用，如实时聊天、游戏和金融市场数据。
2. **带宽效率**：不像 HTTP，每个请求都带有请求头，WebSocket 建立连接后，后续数据传输只包含必要的信息，减少了带宽开销。
3. **简单的双向通信**：客户端和服务器可以随时发送和接收数据，适用于复杂的互动场景。

### WebSocket 的缺点

1. **兼容性**：需要客户端和服务器都支持 WebSocket，虽然现代浏览器普遍支持，但某些旧系统可能不兼容。
2. **复杂性**：在实现和维护方面，比简单的 HTTP 请求稍复杂。
3. **长时间连接**：需要在服务器端有效管理长连接，以防止资源耗尽。
4. **安全问题**：如果处理不当，可能带来安全问题，如数据泄露和攻击风险。使用 `wss://` 协议可以在

### WebSocket 使用示例

#### 客户端代码（JavaScript）

```javascript
const socket = new WebSocket("ws://localhost:8080");

socket.addEventListener("open", function (e) {
  console.log("连接成功");
});

socket.send("发送消息");

socket.addEventListener("message", function (e) {
  console.log("收到消息", e.data);
});
```

#### 服务器代码示例（Node.js）

使用 `ws` 库实现简单的 WebSocket 服务器：

```javascript
import WS from "ws"
const wss = new WS.Server({ port: 8080 });

const state = {
    HEART:1.
    MESSAGE:2
}

wss.on('connection', (ws) => {
  console.log('Client connected');

  ws.on('message', (message) => {
    console.log('Received:', message);
    // 点对点
    ws.send(`我是服务端: ${message}`); // 向客户端回送消息
    // 广播
    wss.clients.forEach((client) => {
      client.send('我是服务端 发送给客户端的消息' + message.toString())
  });

// 心跳检测

let heartInreaval = null
const heartCheck = () =>{
    if(ws.readyState === WS.OPEN) {
        socket.send(JSON.stringify({
            type:state.HEART,
            message:"心跳检测"
        }))
    }else {
        clearInterval(heartInreaval)
    }
    }
}
heartInreaval = setInterval(heartCheck,5000)
});
```

### 常用 API

**1. WebSocket 对象**

在 JavaScript 中，WebSocket 是用于与服务器进行实时通信的核心对象。

```javascript
// 创建一个新的 WebSocket 实例
const socket = new WebSocket("ws://example.com/socketserver");

// 使用 wss:// 进行加密连接
// const socket = new WebSocket('wss://example.com/socketserver');
```

**2. WebSocket 常用事件**

1.  `onopen`
    当 WebSocket 连接建立成功时触发。
    用于初始化连接或发送第一条消息。

    ```javascript
    socket.onopen = function (event) {
      console.log("WebSocket connection opened.");
      socket.send("Hello Server!"); // 发送数据到服务器
    };
    ```

2.  `onmessage`
    当服务器发送数据到客户端时触发。
    事件对象的 `data` 属性包含接收到的数据。

    ```javascript
    socket.onmessage = function (event) {
      console.log("Message from server:", event.data);
    };
    ```

3.  `onerror`
    当 WebSocket 连接发生错误时触发。
    用于调试和处理错误。

    ```javascript
    socket.onerror = function (event) {
      console.error("WebSocket error:", event);
    };
    ```

4.  `onclose`
    当 WebSocket 连接关闭时触发。
    事件对象提供了 `code` 和 `reason` 等信息。
    ```javascript
    socket.onclose = function (event) {
      console.log("WebSocket connection closed:", event.code, event.reason);
    };
    ```

**3. WebSocket 方法**

1.  `send`
    用于发送数据到服务器。可以发送文本、二进制数据（`Blob `或 `ArrayBuffer`）。

    ```javascript
    socket.send("Hello, again!");
    // 发送二进制数据
    let buffer = new ArrayBuffer(8);
    socket.send(buffer);
    ```
2.  `close()`
    用于关闭 WebSocket 连接。
    可以传递可选的状态码和关闭原因。
    ```javascript
    socket.close(1000, 'Closing connection normally');
    ```

**4. WebSocket链接状态**
`WebSocket` 对象有一个 readyState 属性来表示连接的当前状态：
| 状态       | 描述 | 
| ---------- | ------ | 
| CONNECTING (0) | 正在建立连接 |
| OPEN (1) |  连接已建立，可以进行数据传输。 |
| CLOSING (2) |  连接正在关闭 |
| CLOSED (3)|  连接已关闭或无法建立。 |


