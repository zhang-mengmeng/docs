### 引言
`PWA（Progressive Web App，渐进式 Web 应用）`是一种能够提供类似本地应用体验的 Web 应用。PWA 结合了传统网页和原生应用的优点，具有响应迅速、离线访问、主动通知等特性，用户可以像访问网站一样使用它们，也可以将其安装到设备上，像原来的应用一样运行。

### 三大核心

#### 渐进式web应用 `manifest.json`
- 使用方法
通过link标签去引入 
```javascript
<link rel="manifest" fref="./manifest.json">
```
- **manifest.json中常见的字段及其作用**

`name`:

 应用程序的全名，会在启动时和应用程序管理器中显示。

 示例："name": "My Progressive Web App"

`short_name`:

 应用的简单来说，当空间有限时显示，例如在主屏幕图标下方。

 示例："short_name": "MyPWA"

`start_url`:

 应用启动时的起始页面。常设置为首页或入口页面的URL。

 示例："start_url": "/index.html"

`icons`:
 
 定义应用的图标，以适应不同的屏幕分辨率和设备。

`display`:

 控制应用的显示模式。可选值包括：
   
   fullscreen：全屏模式，不显示浏览器UI。

   standalone：独立模式，相似应用，隐藏浏览器地址栏。

   minimal-ui：提供一些基础的浏览器UI，如返回按钮。

   browser：标准浏览器模式，和普通网页相同。

`background_color`:

 启动屏幕的背景颜色，加载页面时会显示在屏幕后面。

 示例："background_color": "#ffffff"

`theme_color`:

 设置应用程序的主题颜色，通常用于浏览器的地址栏或任务栏颜色。

 示例："theme_color": "#4CAF50"

`orientation`:

 指定应用的默认屏幕方向，如portrait

 示例："orientation": "portrait"

- **manifest.json 配置示例**

```json
{
    "name":"APP", // 应用的名称
    "short_name":"App", //短名称，如果name过长或者没有就使用这个
    "display":"standalone" ,// standalone 没有导航页面类似于APP
    "start_url":"/", // 配置路径
    "icons":[ // 配置图标
        {
            "src":"/" , //路径
            "sizes":"256*256" ,// 大小
            "type":"image/png" // 类型 
        }
    ]
}
```

#### 离线缓存技术 `service worker`

- **声明周期**：
1. 注册
```typescript
navigator.serviceWorker.register('路径') // 返回一个promise
```
2. 安装