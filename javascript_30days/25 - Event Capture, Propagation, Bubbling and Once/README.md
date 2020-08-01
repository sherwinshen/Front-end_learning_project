# 实现效果

学习DOM的事件机制，包括事件捕获，事件冒泡，单次触发等。



# 知识点

`target.addEventListener(type, listener, options);`

options 可选，一个指定有关 `listener `属性的可选参数**对象**。可用的选项如下：

- `capture`:  [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Boolean)，表示 `listener` 会在该类型的事件捕获阶段传播到该 `EventTarget` 时触发。
- `once`:  [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Boolean)，表示 `listener 在添加之后最多只调用一次。如果是` `true，` `listener` 会在其被调用之后自动移除。
- `passive`: [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Boolean)，设置为true时，表示 `listener` 永远不会调用 `preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。`
- ` mozSystemGroup`: 只能在 XBL 或者是 Firefox' chrome 使用，这是个 [`Boolean`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Boolean)，表示 `listener `被添加到 system group。



1、事件只触发一次：options中`once`设置为True。

2、若`capture`设置为true，则若外部元素也监听该事件，则会在捕获阶段首先触发，而不是目标元素先触发。

3、暂停冒泡：在事件回调函数中调用`e.stopPropagation()`方法后，即可看到在该处监听到事件后不再继续传递事件。