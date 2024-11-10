### 引言

**埋点**是指在产品或系统中预先设定代码或数据收集点，以便在用户与产品交互时自动记录相关行为和数据。这种技术广泛用于数据分析和用户行为追踪，帮助企业或开发团队了解用户如何使用产品、在哪些地方遇到问题，以及哪些功能最受欢迎。

### 埋点的主要作用

- 用户行为数据 收集页面的浏览量
- 用户性能评估 页面的加载时间，API 调用延时的时间，错误日志
- 设备和环境 用户操作设备 操作系统 浏览器版本
- 用户属性数据 用户的 ID 地理位置 用户的角色

总结:收集用户的隐私 优化性能体验 进行 A/B 业务决策

### 数据指标

常见的埋点数据指标包括：

- `PV（Page View）`：页面的总浏览量。
- `UV（Unique Visitor）`：访问页面的独立用户数。
- `点击率`：某个按钮或链接被点击的次数。
- `首次加载时间`：用户打开页面的加载时间。
- `跳出率`：用户在访问单个页面后就离开的比例。

通过埋点收集和分析这些数据，企业可以更深入地了解用户行为，进一步优化用户体验和产品功能。

### 功能实现

#### 监听按钮点击位置

- **实现步骤**：

1. 在需要监听的按钮上绑定事件监听器。
2. 记录按钮点击的位置信息（如`event.x`和`event.y`）。

- **代码示例**：

```typescript
const button = (send: send) => {
  // 监听按钮点击
  document.addEventListener("click", (e) => {
    // 获取点击的元素
    const target = e.target as HTMLElement;
    // 获取元素属性上面的值
    const flag = target.getAttribute(Token.click);
    // 如果存在
    if (flag) {
      // 进行上报
      send({
        // 类型
        type: "click",
        // 属性值
        text: flag,
        // 按钮的位置信息
        data: target.getBoundingClientRect(),
      });
    }
  });
};
```

#### 监听第几行代码报错

- **实现步骤**：

1. 使用`window.addEventListener(error)`事件监听全局错误。
2. 通过错误堆栈信息获取报错的行号。
3. 发送邮件上报错误信息。

- **代码示例**：

```typescript
const error = (send: send) => {
  // 监听错误代码
  window.addEventListener("error", (e) => {
    send({
      // 类型
      type: e.type,
      // 上报的类容
      data: {
        line: e.lineno,
        file: e.filename,
      },
      // 报错的内容
      text: e.message,
    });
  });
};
const transporter = nodemailer.createTransport({
  service: "qq",
  port: 465,
  host: "smtp.qq.com",
  auth: {
    user: "743714078@qq.com",
    pass: "kukclhsrrfwabfeh",
  },
});
app.post("/tracker", (req, res) => {
  if (req.body.type == "error") {
    transporter.sendMail({
      from: "743714078@qq.com",
      to: "1245274264@qq.com",
      subject: "错误",
      text: JSON.stringify(req.body),
    });
  }
  console.log(req.body);
  res.send("ok");
});
```

#### 监听 Promise 报错

- **实现步骤**：
  1. 使用`window.addEventListener('unhandledrejection')`监听未捕获的 Promise 错误。
  2. 发送邮件上报错误信息。
  - **代码示例**：
  ```typescript
  const reject = (send: send) => {
    window.addEventListener("unhandledrejection", (e) => {
      send({
        type: e.type,
        data: {
          reason: e.reason,
          href: location.href,
        },
        text: e.reason,
      });
    });
  };
  const transporter = nodemailer.createTransport({
    service: "qq",
    port: 465,
    host: "smtp.qq.com",
    auth: {
      user: "743714078@qq.com",
      pass: "kukclhsrrfwabfeh",
    },
  });
  app.post("/tracker", (req, res) => {
    if (req.body.type == "error") {
      transporter.sendMail({
        from: "743714078@qq.com",
        to: "1245274264@qq.com",
        subject: "错误",
        text: JSON.stringify(req.body),
      });
    }
    console.log(req.body);
    res.send("ok");
  });
  ```

#### 监听 Vue 路由（hash, history）

- **实现步骤**：

  1. 使用`window.addEventListener('hashchange')`监听 hash 路由的变化

  - **代码示例**：

  ```typescript
  window.addEventListener("hashchange", (e) => {
    send({
      type: "pv-hash",
      data: {
        newURL: e.newURL,
        oldURL: e.oldURL,
      },
      text: "pv-hash",
    });
  });
  ```

  2. 使用`window.addEventListener('popstate')`监听 history 路由的变化

  - **代码示例**：

  ```typescript
  window.addEventListener("popstate", (e) => {
    send({
      type: "pv-history",
      data: {
        state: e.state,
        url: location.href,
      },
      text: "pv-history",
    });
  });
  ```

  3. 手写`pushState`监听 history 路由的变化

  - **代码示例**：

  ```typescript
  const pushState = history.pushState;

  window.history.pushState = function (state, titiel, url) {
    const res = pushState.call(this, state, titiel, url);
    const e = new Event("pushState");
    window.dispatchEvent(e);
    return res;
  };

  window.addEventListener("pushState", (e) => {
    send({
      type: "pv-pushState",
      data: {
        url: location.href,
      },
      text: "pv-pushState",
    });
  });
  ```

#### 监听 XHR 调用接口

- **实现步骤**：
  1. 使用`XMLHttpRequest.prototype.send`和`XMLHttpRequest.prototype.open`方法进行监听。
  - **代码示例**：
  ```typescript
  const OriginOpen = XMLHttpRequest.prototype.open;
  const OriginSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (
    method: string,
    url: string,
    async = true
  ) {
    send({
      type: "ajax-open",
      data: {
        method,
        url,
      },
      text: "ajax-open",
    });
    OriginOpen.call(this, method, url, (async = true));
  };
  XMLHttpRequest.prototype.send = function (data) {
    send({
      type: "ajax-send",
      data: {
        data,
      },
      text: "ajax-send",
    });
    OriginSend.call(this, data);
  };
  ```

#### 监听 Fetch

- **实现步骤**：
  1. 使用`fetch`函数的`fetch`事件进行监听。
  - **代码示例**：
  ```typescript
  const OriginFetch = window.fetch;
  window.fetch = function (...args: any) {
    send({
      type: "fetch",
      data: args,
      text: "fetch",
    });
    return OriginFetch.apply(this, args);
  };
  ```

#### 监听首屏加载时间

- **实现步骤**：
  1. 使用`MutationObserver`监听首屏加载的时间

```typescript
const onePage = (send: send) => {
  let firstScreenTime = 0;
  const ob = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      firstScreenTime = performance.now();
    });
    if (firstScreenTime > 0) {
      send({
        type: "firstScreen",
        data: {
          time: firstScreenTime,
        },
        text: "firstScreen",
      });
      ob.disconnect();
    }
  });
  ob.observe(document, { subtree: true, childList: true });
};
```

### API 及应用场景

`navigator.userAgent`是一个字符串，包含了当前浏览器的详细信息，如浏览器类型、版本、操作系统等。

```javascript
const userAgent = navigator.userAgent;
console.log(userAgent); // 例如："Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
```

**应用场景**：用于浏览器检测、统计分析等。

`new Date().getTime()`获取当前时间的时间戳

```javascript
const timestamp = new Date().getTime();
console.log(timestamp); // 例如：1626345678900
```

**应用场景**：用于记录事件发生时间、计算时间差等。

`performance.now()`返回一个高精度的时间戳，通常用于性能测量。

```javascript
const startTime = performance.now();
// 执行一些操作
const endTime = performance.now();
console.log(`操作耗时: ${endTime - startTime} 毫秒`);
```

**应用场景**：用于性能分析、优化代码执行时间。

`Object.assign({}, obj1, obj2)`融合两个或多个对象，将它们的属性合并到一个新对象中（浅拷贝）。

```javascript
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = Object.assign({}, obj1, obj2);
console.log(mergedObj); // 输出: { a: 1, b: 3, c: 4 }
```

**应用场景**：用于合并配置、默认参数等。

`Object.keys`获取对象的所有可枚举属性的键名数组。

```javascript
const obj = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj);
console.log(keys); // 输出: ["a", "b", "c"]
```

**应用场景**：用于遍历对象属性、检测对象结构等。

`e.target`在事件处理函数中，`e.target`表示触发事件的元素。

```javascript
document.getElementById("myButton").addEventListener("click", function (e) {
  console.log(e.target); // 输出: <button id="myButton"></button>
});
```

**应用场景**：用于事件委托、动态处理元素事件等。

`getAttribute`获取元素的指定属性的值。

```javascript
const element = document.getElementById("myElement");
const value = element.getAttribute("data-value");
console.log(value); // 输出: "example"
```

**应用场景**：用于获取自定义属性、配置信息等。

`getBoundingClientRect()`获取元素的位置和尺寸信息。

```javascript
const button = document.getElementById("myButton");
const rect = button.getBoundingClientRect();
console.log(rect); // 输出: { top: 100, left: 50, width: 100, height: 30, ... }
```

**应用场景**：用于计算元素位置、实现动画效果等。

`unhandledrejection()`监听未捕获的 Promise 拒绝事件。

```javascript
window.addEventListener("unhandledrejection", function (event) {
  console.error("未处理的Promise拒绝:", event.reason);
});
```

**应用场景**：用于捕获和处理未处理的 Promise 错误，防止应用崩溃。

`MutationObserver()`监听 DOM 树的变化。

```javascript
const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    console.log(mutation);
  });
});

const config = {
  attributes: true, // 监听属性变化
  childList: true, // 监听子节点增删
  subtree: true, // 监听后代节点变化
};

observer.observe(document.body, config);
```

**应用场景**：用于动态加载内容、实时更新视图等。

### HTTP

- **CORS 策略**：

  1.Access-Control-Allow-Origin 使用了通配符\*

```typescript
// 我的代码
res.setHeader('Access-Control-Allow-Origin','*'),
// 报错原因
Access to resource at 'http://localhost:3000/tracker' from origin 'http://localhost:5174' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'.
// 解决 指定IP
res.setHeader('Access-Control-Allow-Origin','http://localhost:5174'),
```

  2.Access-Control-Allow-Credentials' 在谷歌浏览器 95 版本之后 不允许 cookie 跨域

```typescript
// 报错原因
Access to resource at 'http://localhost:3000/tracker' from origin 'http://localhost:5174' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Credentials' header in the response is '' which must be 'true' when the request's credentials mode is 'include'.
// 解决 支持上传cookie
res.setHeader('Access-Control-Allow-Credentials','true'),
```

3.cors只能允许发送普通的请求  URLSearchPaeams ?a=2&b=2  text/plain formData
```typescript
// 报错原因
Access to resource at 'http://localhost:3000/tracker' from origin 'http://localhost:5174' has been blocked by CORS policy: Request header field content-type is not allowed by Access-Control-Allow-Headers in preflight response.
// 解决 支持自定义影响头
res.setHeader('Access-Control-Allow-Headers','content-type')
```
- **options预检出现的三种情况**：
  1. 跨域会有
  2. 自定义请求头
  3. post并且是application/json 非普通请求