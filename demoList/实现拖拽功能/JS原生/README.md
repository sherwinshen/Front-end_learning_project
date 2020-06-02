# JS原生拖拽功能

参考链接：[一步一步实现JS拖拽插件](https://www.cnblogs.com/lrzw32/p/4696655.html)



拖拽主要分为三步骤：

1. 鼠标点击元素 mousedown
2. 拖住元素，鼠标移动 mousemove
3. 到达一定位置，鼠标放掉 mouseup



各步骤主要操作如下：

- 用鼠标点击被拖拽的元素触发onmousedown
  - 设置当前元素的是否拖拽属性为true，表示可以拖拽
  - 记录当前鼠标的坐标x,y和元素的坐标x,y，用于后续位置确定

- 移动鼠标触发onmousemove
  - 判断元素的是否拖拽属性，若为false不进行拖拽操作
  - 元素坐标设置
    - 元素的x坐标 =  鼠标现在的x坐标 - 鼠标之前的x坐标 + 元素本来的x坐标
    - 元素的y坐标 =  鼠标现在的y坐标 - 鼠标之前的y坐标 + 元素本来的y坐标
- 放开鼠标触发onmouseup
  - 元素的是否拖拽的属性设置为false



⚠️元素想要被拖动，它的postion属性一定要是relative或absolute。