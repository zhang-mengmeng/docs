---
outline: deep
prev:
  text: 'fetch'
  link: '/fetch'
next:
  text: 'sse'
  link: '/sse'
---

### 概述

**AJAX**（Asynchronous JavaScript and XML）是一种在不重新加载整个网页的情况下，与服务器交换数据和更新页面部分内容的技术。尽管名字中包含`XML`，但实际应用中可以使用多种格式（如`JSON`、`HTML`或纯文本）来传输数据。

### AJAX 的主要特点：

1.  **异步更新：**可以在用户操作网页时异步更新页面的某个部分，而不打断用户体验。
2.  **用户体验优化：**减少了网页整体的刷新次数，使应用看起来更快、更流畅。
3.  **广泛应用：** 常用于动态数据加载、表单提交、内容刷新等场景，如搜索建议、评论加载和实时聊天。

### AJAX 的核心组成部分：

- **XMLHttpRequest (XHR)：**这是实现 AJAX 功能的核心技术，通过它，网页能够发起 HTTP 请求并接收响应。
- **JavaScript：**用于与 XHR 对象进行交互并动态更新网页内容。
- **DOM (Document Object Model)：**用于修改网页的结构和内容。
- **数据格式：**虽然`XML`是其早期使用的格式，但`JSON`已成为现代应用中更常见的数据交换格式。

### AJAX 的工作流程：

1.  用户在网页上触发事件（如点击按钮）。
2.  JavaScript 创建一个 XMLHttpRequest 对象并配置请求。
3.  通过 XHR 对象发送请求到服务器。
4.  服务器处理请求并返回响应（数据）。
5.  JavaScript 接收服务器响应并更新网页内容。

### XHR 状态码解释：

| 监听       | 状态码 | 描述                                                      |
| ---------- | ------ | --------------------------------------------------------- |
| readyState | 0      | 未初始化，XMLHttpRequest 对象已经创建，但未掉用 open 方法 |
| readyState | 1      | 已打开，open 方法已经被调用，但 send 方法未被调用         |
| readyState | 2      | 已发送，send 方法已经被调用，请求已经被服务器接收         |
| readyState | 3      | 正在接收，服务器正在处理请求并返回数据                    |
| readyState | 4      | 完成，服务器已经完成了数据传输                            |
| status     | 200    | 成功                                                      |
| status     | 400    | 参数错误                                                  |
| status     | 403    | 没有权限                                                  |
| status     | 401    | token 错误                                                |
| status     | 404    | 未找到                                                    |
| status     | 500    | 服务器错误                                                |

### AJAX 实现示例：

#### get 请求：

```javascript
var xhr = new XMLHttpRequest();
// 请求的方式  请求的地址   是否异步 默认为true
xhr.open("GET", "https://www.baidu.com？name=xiaoming", true);
// 监听状态码的变化
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};
xhr.send(null);
```

#### 请求进度 `progress`

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.baidu.com', true);
xhr.addEventListener('progress', function(event) {
    var percentComplete = event.loaded / event.total * 100;
    console.log(percentComplete + '% downloaded');
}
xhr.send(null);
```

#### 超时时间 `timeout`

```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.baidu.com", true);
xhr.timeout = 5000; // 设置超时时间为5秒
xhr.addEventListener("timeout", () => {
  console.log("请求超时");
});
xhr.send(null);
```

#### 中断请求 `abort`

```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.baidu.com", true);
xhr.send(null);
// 中断请求
xhr.abort();
xhr.addEventListener("abort", () => {
  console.log("请求中断");
});
```

#### POST 请求：

```javascript
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://www.baidu.com", true);
// 设置请求头 一定要放在open的下面
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    console.log(response);
  }
};
// 传递JSON数据，一定要序列化
// urlencoded 方式需要传递字符串
xhr.send(JSON.stringify({ name: "xiaoming" }));
```

#### 上传文件

```javascript
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://www.baidu.com", true);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    console.log(response);
  }
};
// 创建FormData对象
var formData = new FormData();
// 添加文件
formData.append("file", fileInput.files[0]);
xhr.send(formData);
```

#### load

```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.baidu.com", true);
xhr.addEventListener("load", () => {
  if (xhr.status === 200) {
    console.log("请求成功");
  }
});
xhr.send(null);
```
