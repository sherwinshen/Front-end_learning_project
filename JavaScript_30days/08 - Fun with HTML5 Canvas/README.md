# 实现效果

用 HTML5 中的 Canvas 的路径绘制实现一个绘画板，可供鼠标画画，颜色呈彩虹色渐变，画笔大小同样呈渐变效果。



# 解决步骤

1. 获取canvas元素
2. 创建canvas元素的context对象ctx
3. 设定ctx基本属性-颜色、线条大小等
4. 鼠标事件监听，设定绘画效果，考虑鼠标操作需要监听的事件类型



# 知识点

#### 1. canvas

```javascript
// canvas使用基本步骤
// step1.获得canvas元素
const canvas = document.querySelector('canvas');
// step2.获得context对象
const ctx = canvas.getContext("2d");
// step3.在ctx上设置属性或方法即可完成绘制
ctx.lineWidth = 20;
```

>  ctx属性/方法分为以下几种：颜色样式，线条样式，矩形，路径，转换，文本，图像绘制，像素操作，合成等，参考[HTML 5 Canvas 参考手册](https://www.w3school.com.cn/tags/html_ref_canvas.asp)

本实验所用到的属性/方法：

- `lineCap`：笔触的形状，有 round | butt | square 圆、平、方三种。
- `lineJoin`：线条相较的方式，有 round | bevel | miter 圆交、斜交、斜接三种。
- `lineWidth`：线条的宽度
- `strokeStyle`：线条描边的颜色
- `fillStyle`：填充的颜色
- `beginPath()`：新建一条路径
- `stroke()`：绘制轮廓
- `moveTo()`：（此次）绘制操作的起点
- `lineTo()`：路径的终点

#### 2. 路径绘制

```javascript
// 路径绘制使用基本步骤
// step1 开始绘制
ctx.beginPath();
// step2 把路径移动到画布中的指定点-start from
ctx.moveTo(lastX, lastY);
// step3 添加一个新点并在画布中创建从该点到最后指定点的线条-go to
ctx.lineTo(newX, newY);
// step4 绘制已定义的路径
ctx.stroke();
```

#### 3. 彩虹颜色实现

> 利用 HSL 色彩模式，三个属性值，见下。

- H(hue) 代表色调，取值为 0~360，专业术语叫色相
- S 是饱和度，可以理解为掺杂进去的灰度值，取值为 0~1
- L 则是亮度，取值也是 0~1，或者百分比。

#### 4. 鼠标操作分解

- 单击鼠标-按下准备开始
- 移动鼠标-画线
- 松开手指-结束画线