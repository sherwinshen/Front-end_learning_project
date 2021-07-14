# 实现效果

当鼠标拖动画面移动时，条幅同步向水平方向移动。



# 解决步骤

在最外层的items元素上监听鼠标的按下，移动，弹起事件并编写相应的回调函数即可，在对应的回调函数中获取到鼠标横向滑动的距离，将该距离值翻倍后赋值予条幅的scrollLeft属性可调整元素在水平方向上滚动的位置。



# 知识点

1、透视效果CSS3

```javascript
/*透视距离，即视点位于垂直距离屏幕的距离，数值越大，离的越远，变形效果看起来越微小*/
.items{perspective: 500px;}
/*所有奇数序号的子元素沿X轴放大，并绕Y轴旋转（相当于人绕柱子转）*/
.item:nth-child(even) { transform: scaleX(1.31) rotateY(40deg); }
/*所有奇数序号的子元素沿X轴放大，并绕Y轴逆向旋转（相当于人绕柱子反转一定角度）*/
.item:nth-child(odd) { transform: scaleX(1.31) rotateY(-40deg); }
```

2、pageX、clientX、screenX、offsetX、ScrollLeft、ScrollTop、clientLeft、screenLeft等之间的理解