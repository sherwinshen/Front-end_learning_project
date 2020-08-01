# iframe同源及跨域通信

> 简介：iframe同源及跨域通信的几种方法
>
> 本文作者：[EnvisionShen](https://github.com/MrEnvision)
>
> 创建日期：2020-03-03



### 同源通信 - 方法1

> 具体细节参看父页面-parent.html以及iframe-child.html

总结方法：

- 父页面调用子页面

```javascript
<iframe src="child.html" name="iframename" id="iframe"></iframe>

iframename.window.document.XX;
iframename.window.functionName();// function定义于子页面

const iframe = document.getElementById('iframe');
iframe.contentWindow.document.XX;
iframe.contentWindow.functionName(); // function定义于子页面
```

- 子页面调用父页面

```
parent.document.XX;
parent.functionName(); // function定义于父页面
```

### 同源通信 - 方法2

> 主要通过cookies可以进行通信



### 跨域通信 - 方法1

> 片段识别符是指#后面内容，举例`http://example.com/x.html#fragment`的`#fragment`，当url改变时，会触发hashChange方法，可以过hash传递值。

- 父页面和子页面绑定onhashChange监听事件，通过location.hash来获取传递的hash值，即#后面的；

- 父页面传递给子页面 - iframe.contentWindow.location.href='childUrl#XX'；

- 子页面传递给父页面 - window.parent.location.href = ‘parentUrl#XX'。



### 跨域通信 - 方法2（最主要）

> 跨文档通信API - 格式`window.postMessage(内容, 协议+域名+端口)`

```javascript
// 子窗口向父窗口发消息
window.opener.postMessage('This message is from child', url);
// 父窗口向子窗口发消息
iframe1.contentWindow.postMessage('This message is from parent', url);

// 监听 message 消息 - event.source发送消息窗口,event.origin消息发向的窗口,event.data消息内容
window.addEventListener('message', function (e) {
  console.log(e.data);
},false);
```

> 注意通过event.source可实现消息过滤，如`if(e.source!=window.parent) return;`





------

如果发现本项目有内容上的错误，欢迎提交 issues 进行指正。