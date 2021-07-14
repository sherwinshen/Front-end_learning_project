# 实现效果

在输入框中搜索字或者某个词快速匹配含有这个字或者是词的诗句。



# 解决步骤

1. 通过Fetch下载数据并处理保存
2. 输入框事件监听获得输入文字
3. 输入文字进行数据匹配
4. 数据显示更新



# 知识点

#### 1. fetch

语法：`fetch(input, init).then(function(response) { ... });`

```javascript
// 举例
const poetrys = [];
fetch(‘url’).then(blob => blob.json()).then(data => poetrys.push(...data));
```

> 此处使用`.json()`，通过 JSON 对象来读取 Response 流中的数据，常用方法还有blob()、text()、arrayBuffer()、formData()等

具体参看链接：[Fetch使用指南](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)

#### 2. ES6 中的数组扩展语法

> 利用扩展运算符可以替代 ES5 中的 `push` 方法添加一个数组到另一个数组末尾

```javascript
const arr1 = [1,2,3,4]
const arr2 = [5,6,7,8]
// ES5
Array.prototype.push.apply(arr1, arr2);

// ES6
arr1.push(...arr2);
```

#### 3. 正则表达式

略