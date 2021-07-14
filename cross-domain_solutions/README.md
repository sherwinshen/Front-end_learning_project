# 前端跨域方法总结

> 简介： 常用的9种前端跨域方法总结，参考资料: [「解锁跨域的九种姿势」](https://github.com/LiChangyi/crossDomain)   [「前端常见跨域解决方案（全）」](https://segmentfault.com/a/1190000011145364)。



## 1. 什么是跨域？

浏览器存在同源政策，只有**协议+域名(包括子域名)+端口**相同才能同源访问，注意文件路径不同是同源的。

## 2. 跨域方法

> 主要是CORS+代理跨域+JSONP(有点古老)这几个方法要清楚。

### 2.1 JSONP

在同源政策中script、link和img不受限制，因此JSONP的原理就是通过`script`来获取远程的js脚本文件。

- 前端文件：
  - 创建script元素
  - script设置src地址，并带上回调函数的参数(如果需要返回信息)及传递的其他参数
  - 将script元素添加至document中
  - 设置回调函数

```javascript
// 1、创建script节点
const script = document.createElement('script')
// 2、设置src以及如果需要返回数据则设置回调函数
script.src = 'http://localhost:8080/?callback=displayData&&user=envision';
// 3、将回调函数添加至document
document.body.append(script);
// 4、设置回调函数
function displayData(data) {
   alert(data);
}
```

- 服务端文件：
  - 处理数据，并将回调函数以字符串的形式返回

```javascript
app.get('/', (req, res) => {
    console.log(req.query)
    const name = `${req.query.user} Shen`;
    res.send(`${req.query.callback}('${name}')`)
})
```

### 2.2 CORS

> 整个 CORS 通信过程，都是浏览器自动完成，不需要用户参与。对于开发者来说，CORS 通信与普通的 AJAX 通信没有差别，代码完全一样。浏览器一旦发现 AJAX 请求跨域，就会自动添加一些附加的头信息，因此，实现 CORS 通信的关键是服务器。只要服务器实现了 CORS 接口，就可以跨域通信。参考资料：[彻底理解CORS跨域原理](https://www.cnblogs.com/qiujianmei/p/11649905.html)

```javascript
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:63342');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
app.use(allowCrossDomain);
```

浏览器直接发出CORS请求，简单请求会在头信息之中增加一个`Origin`字段，来说明本次请求来自哪个源（协议 + 域名 + 端口），服务器就根据这个值，决定是否同意这次请求，而非简单请求会先发送一个预检请求（OPTIONS），来先询问服务器，当前网页所在的域名是否在服务器的许可名单之中。

### 2.3 Nginx

> 对nginx.conf文件进行配置

```javascript
location /api/ {
        proxy_pass http://localhost:8888/; # 将地址代理到api上
}
// 本地访问 http://localhost:8080/api/getName  ===>  http://localhost:8888/getName
```

### 2.4 中间件代理跨域

> 例如，可以利用http-proxy-middleware中间件来实现跨域代理，使用Koa框架的话还可以使用koa-proxy

```javascript
const proxy = require('http-proxy-middleware');

app.use('/api', proxy({
    target: 'http://localhost:8080',
    changeOrigin: true
}))
```

> 在vue项目中可以再config/index.js 文件进行配置

```javascript
module.exports = {
dev: {
  env: require('./dev.env'),
  port: 8080,
  autoOpenBrowser: true,
  assetsSubDirectory: 'static',
  assetsPublicPath: '/',
  proxyTable: {
    '/api': {
      target: 'http://www.abc.com',  //目标接口域名
      changeOrigin: true,  //是否跨域
      pathRewrite: {
        '^/api': '/'   //重写接口，实际请求去掉/api以空字符串代替
      }
    },
  }
}
// 'http://localhost:8080/api/getName' ===> 'http://www.abc.com/getName'  
```

### 2.5 websocket

> 感觉不常用？？？

```js
// 网页脚本
var ws = new WebSocket("wss://echo.websocket.org");

ws.onopen = function(evt) { 
  console.log("Connection open ..."); 
  ws.send("Hello WebSockets!");
};

ws.onmessage = function(evt) {
  console.log( "Received Message: " + evt.data);
  ws.close();
};

ws.onclose = function(evt) {
  console.log("Connection closed.");
}; 
```

### 2.6 网页间跨域-postmessage

- 发送消息：`window.postMessage(内容, 协议+域名+端口)`，第二个参数为接受窗口；
- 监听消息：`window.addEventListener('message', function (e) { console.log(e.data);});`

窗口A：

```html
<button id="btn">跨域访问</button>
<div>This msg is 3000port. Need 8080 port</div>
<iframe id="iframe" src="http://localhost:8080/index2.html"></iframe>
<script type="text/javascript">
    const iframe = document.getElementById('iframe');
    const btn = document.getElementById('btn');
    btn.addEventListener('click', function postMsg() {
        iframe.contentWindow.postMessage('This msg is from 3000port', 'http://localhost:8080')
    })
    window.onmessage = function (e) {
        if (e.origin !== 'http://localhost:8080') alert('error')
        const div = document.getElementsByTagName('div')[0]
        div.innerText = e.data
    }
</script>
```

窗口B：

```html
<div>This msg is 8080port. Need 3000 port</div>
<script>
    window.onmessage = function (e) {
        if(e.origin !== 'http://localhost:3000') alert('error')
        const div = document.getElementsByTagName('div')[0]
        div.innerText = e.data
        window.parent.postMessage('This msg is from 8080post', 'http://localhost:3000')
    }
</script>
```

### 2.7 iframe跨域
- document.domain + iframe跨域：两个页面都设置相同主域`document.domain = 'http://localhost';`。详见参考资料。
- location.hash + iframe跨域
- window.name + iframe跨域



------

如果发现本项目有内容上的错误或侵犯相关权益，欢迎提交 issues 进行指正，相关合作请邮件 <a href="mailto:EnvisionShen@gmail.com">EnvisionShen@gmail.com </a>联系。
