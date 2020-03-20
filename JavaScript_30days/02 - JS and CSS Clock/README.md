# 实现效果

模拟时钟

# 解决步骤

1. 获得当前时间
2. 根据当前时间获得时针分针秒针的角度
3. 想法1:每隔一秒更新所有指针的角度；想法2:每隔一秒更新秒针，时针分针进行积累，到达一定程度增加角度

# 知识点

#### 1. CSS3过渡属性 - transition

transition：transform（名称） 1.2s（过渡时间） linear（过渡方式） 2s（过渡开始时间）

- 名称：设置为all，表示指所有的过渡属性
- 过渡时间：默认值为0，为0时，表示变化是瞬时的，看不到过渡效果。
- 过渡方式： Ease首尾变缓；Linear线性变化；Ease-in开始慢后面快；Ease-out开始快后面慢；Ease-in-out首尾慢中间快；cubic-bezier三次贝塞尔曲线

> transition需要用户的行为（如点击，悬浮等）触发，没法在网页加载时自动发生。 transition是一次性的，不能重复发生，除非一再触发。 transition只能定义开始状态和结束状态，不能定义中间状态。

#### 2. CSS3属性 - transform

```javascript
// 2D
transform:matrix(n,n,n,n,n,n) // 定义 2D 转换，使用六个值的矩阵。
transform:translate(x,y) // 定义 2D 转换。
transform:scale(x[,y]?) // 定义 2D 缩放转换。
transform:rotate(angle) // 定义 2D 旋转，在参数中规定角度。
transform:skew(x-angle,y-angle) // 定义沿着 X 和 Y 轴的 2D 倾斜转换。

// 3D
transform:matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)	 // 定义 3D 转换，使用 16 个值的 4x4 矩阵。
transform:translate3d(x,y,z) // 定义 3D 转换。
transform:scale3d(x,y,z) // 定义 3D 缩放转换。
transform:rotate3d(x,y,z,angle) // 定义 3D 旋转。
transform:perspective(n) // 为 3D 转换元素定义透视视图。
```

> `transform-origin: x-axis y-axis z-axis;`设置旋转元素的基点位置 - 2D 转换元素能够改变元素 x 和 y 轴；3D 转换元素还能改变其 x、y、z轴。