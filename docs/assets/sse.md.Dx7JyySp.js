import{_ as i,c as a,a2 as t,o as n}from"./chunks/framework.DD8U72qy.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{"outline":"deep","prev":{"text":"ajax","link":"/xhr"},"next":{"text":"websocked","link":"/ws"}},"headers":[],"relativePath":"sse.md","filePath":"sse.md","lastUpdated":null}'),e={name:"sse.md"};function h(l,s,k,p,r,E){return n(),a("div",null,s[0]||(s[0]=[t(`<h3 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h3><p><strong>SSE（Server-Sent Events）</strong> 是一种在网页上实现服务器向客户端推送数据的技术。与传统的客户端轮询或 WebSocket 不同，SSE 提供了一种单向的数据流，从服务器推送数据到客户端（浏览器），用于实现实时更新。</p><h3 id="sse-的特点" tabindex="-1">SSE 的特点 <a class="header-anchor" href="#sse-的特点" aria-label="Permalink to &quot;SSE 的特点&quot;">​</a></h3><ol><li><strong>单向通信</strong>：SSE 是单向的，服务器可以向客户端发送数据，但客户端无法通过同一连接发送数据回服务器。如果需要双向通信，WebSocket 是更好的选择。</li><li><strong>基于 HTTP 协议</strong>：SSE 使用 HTTP 协议来建立连接，因此与现有的 HTTP 基础设施（如防火墙、代理等）兼容性好。</li><li><strong>自动重连</strong>：SSE 具有自动重连功能，当连接断开时，浏览器会自动尝试重新连接，确保数据流不中断。</li><li><strong>简单实现</strong>：实现 SSE 通信比 WebSocket 更简单，尤其适用于轻量级的实时数据推送。</li></ol><h3 id="sse-的工作原理" tabindex="-1">SSE 的工作原理 <a class="header-anchor" href="#sse-的工作原理" aria-label="Permalink to &quot;SSE 的工作原理&quot;">​</a></h3><ol><li><strong>客户端连接</strong>：浏览器通过 JavaScript 创建一个 <code>EventSource</code> 对象，向服务器发送 HTTP 请求，建立 SSE 连接。</li><li><strong>服务器发送数据</strong>：服务器以纯文本格式连续发送数据，使用 <code>text/event-stream</code> 的 MIME 类型。</li><li><strong>客户端接收数据</strong>：客户端监听消息并处理接收到的数据。</li></ol><h3 id="sse-的优点" tabindex="-1">SSE 的优点 <a class="header-anchor" href="#sse-的优点" aria-label="Permalink to &quot;SSE 的优点&quot;">​</a></h3><ol><li><strong>简单实现</strong>：使用简单，无需复杂的协议或设置即可在客户端和服务器之间实现实时数据流。</li><li><strong>浏览器支持</strong>：现代浏览器（如 Chrome、Firefox、Safari）都原生支持 SSE。</li><li><strong>自动重连和事件标记</strong>：内置自动重连机制，客户端在连接断开后会自动尝试重连。服务器可以发送 <code>id</code> 字段，帮助客户端在重连时恢复状态，避免数据丢失。</li></ol><h3 id="sse-的局限性" tabindex="-1">SSE 的局限性 <a class="header-anchor" href="#sse-的局限性" aria-label="Permalink to &quot;SSE 的局限性&quot;">​</a></h3><ol><li><strong>单向通信</strong>：只能从服务器推送数据到客户端，如果需要双向通信（如聊天室、游戏应用），WebSocket 更合适。</li><li><strong>浏览器支持</strong>：虽然大多数现代浏览器支持 SSE，但对一些老旧浏览器（如 IE）支持较差。</li><li><strong>连接数限制</strong>：浏览器对每个域名的连接数有一定限制，SSE 每个 <code>EventSource</code> 占用一个连接。</li><li><strong>跨域问题</strong>：SSE 需要处理跨域资源共享（CORS）问题，如果需要跨域访问服务器，需要设置服务器端的 CORS 头。</li></ol><h3 id="sse-的应用场景" tabindex="-1">SSE 的应用场景 <a class="header-anchor" href="#sse-的应用场景" aria-label="Permalink to &quot;SSE 的应用场景&quot;">​</a></h3><ul><li><strong>实时通知</strong>：如新闻更新、股票价格变化、比赛比分。</li><li><strong>聊天应用</strong>：适用于轻量级的单向聊天通知。</li><li><strong>实时数据大屏</strong></li></ul><h3 id="基本使用示例" tabindex="-1">基本使用示例 <a class="header-anchor" href="#基本使用示例" aria-label="Permalink to &quot;基本使用示例&quot;">​</a></h3><h4 id="客户端代码" tabindex="-1">客户端代码 <a class="header-anchor" href="#客户端代码" aria-label="Permalink to &quot;客户端代码&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> sse</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EventSource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://localhost:3000/api/sse&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sse.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lol&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">e</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getElementById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).innerHTML </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e.data;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h4 id="服务器代码示例-node-js" tabindex="-1">服务器代码示例（Node.js） <a class="header-anchor" href="#服务器代码示例-node-js" aria-label="Permalink to &quot;服务器代码示例（Node.js）&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/api/sse&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">req</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">writeHead</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;Content-Type&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text/event-stream&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> txt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> fs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">readFileSync</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./index.txt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;utf8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> txt.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">split</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> currnet </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> timer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setInterval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (currnet </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`enent: lol</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      res.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">write</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`data:\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">arr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">currnet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\\n\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      currnet</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      clearInterval</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(timer);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">300</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h3 id="常用-api" tabindex="-1">常用 API <a class="header-anchor" href="#常用-api" aria-label="Permalink to &quot;常用 API&quot;">​</a></h3><p><strong>1.EventSource() 构造函数</strong></p><p>url：String 类型，表示与服务器建立连接的 URL。必填。</p><p>options：Object 类型，表示可选参数。常用的可选参数包括：</p><table tabindex="0"><thead><tr><th>参数名</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>withCredentials</td><td>Boolean 类型</td><td>表示是否允许发送 Cookie 和 HTTP 认证信息。默认为 false。</td></tr><tr><td>headers</td><td>Object 类型</td><td>表示要发送的请求头信息。</td></tr><tr><td>retryInterval</td><td>Number 类型</td><td>表示与服务器失去连接后，重新连接的时间间隔。默认为 1000 毫秒。</td></tr></tbody></table><p><strong>2.EventSource.readyState 属性</strong><code>readyState</code> 属性表示当前 <code>EventSource</code> 对象的状态，它是一个只读属性，它的值有以下几个：</p><table tabindex="0"><thead><tr><th>值</th><th>描述</th></tr></thead><tbody><tr><td>CONNECTING</td><td>表示正在和服务器建立连接。</td></tr><tr><td>OPEN</td><td>表示已经建立连接，正在接收服务器发送的数据。</td></tr><tr><td>CLOSED</td><td>表示连接已经被关闭，无法再接收服务器发送的数据。</td></tr></tbody></table><p><strong>3.EventSource.close() 方法</strong></p><p><code>close()</code> 方法用于关闭 <code>EventSource</code> 对象与服务器的连接，停止接收服务器发送的数据。</p><p><strong>4.EventSource.onopen 事件</strong></p><p><code>onopen</code> 事件表示 <code>EventSource</code> 对象已经和服务器建立了连接，并开始接收来自服务器的数据。当 <code>EventSource</code> 对象建立连接时，触发该事件。</p><p><strong>5. EventSource.onerror 事件</strong></p><p><code>onerror</code> 事件表示在建立连接或接收服务器数据时发生了错误。当出现错误时，触发该事件。</p><p><strong>6. EventSource.onmessage 事件</strong></p><p><code>onmessage</code> 事件表示已经接收到服务器发送的数据，当接收到数据时，触发该事件。</p>`,32)]))}const g=i(e,[["render",h]]);export{o as __pageData,g as default};
