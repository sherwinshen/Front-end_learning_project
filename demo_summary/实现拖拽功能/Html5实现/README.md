# H5拖拽（drag/drop）

> 利用不同的监听事件来进行处理。

## 1、拖拽元素可拖放

draggable 属性设置为 true 

## 2、拖什么 - ondragstart 和 setData()

拖拽元素设置监听事件：

- "dragstart" - ` ev.dataTransfer.setData("Text",ev.target.id); ` // 设置被拖数据的数据类型和值

### 3、放到何处 - ondragover

ondragover 事件规定在何处放置被拖动的数据，目标元素需要阻止默认事件，设置监听事件：

- "dragover" - ` ev.preventDefault();` // 避免浏览器对数据的默认处理

## 4、进行放置 - ondrop

目标元素设置监听事件：

- "drop" - ` const data=ev.dataTransfer.getData("Text"); ` // 获得移动元素的相关信息