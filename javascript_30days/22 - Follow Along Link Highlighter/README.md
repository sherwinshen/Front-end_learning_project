# 实现效果

当鼠标移动至某个对应标签上时，为标签添加一个白色的背景框，高亮表示该标签被选中，当鼠标移动至其他标签后，白色背景框不消失，而是直接跟随鼠标平移至新的标签。



# 解决步骤

1. 生成一个绝对定位的块元素，在后续改变其`top`及`left`坐标值移动至对应标签处，来呈现不同标签被激活的效果
2. 鼠标移动至`li`标签后，使用`Element.getBoundingClientRect()`方法获得该标签的位置信息
3. 将获得的``的`top`及`left`值赋给绝对定位块元素，使其移动至被激活的标签，位于标签文字下方



# 知识点

#### 1. Element.getBoundingClientRect()

> 返回值是一个`DOMRect`对象，表示元素的大小及其相对于视口的位置，DOMRect对象包含了一组用于描述边框的只读属性——left、top、right和bottom，单位为像素，除了 width 和 height 外的属性都是相对于视口的左上角位置而言的。

| Attribute | Type  | Description                                                  |
| --------- | ----- | ------------------------------------------------------------ |
| bottom    | float | Y 轴，相对于视口原点（viewport origin）矩形盒子的底部。只读。 |
| height    | float | 矩形盒子的高度（等同于 bottom 减 top）。只读。               |
| left      | float | X 轴，相对于视口原点（viewport origin）矩形盒子的左侧。只读。 |
| right     | float | X 轴，相对于视口原点（viewport origin）矩形盒子的右侧。只读。 |
| top       | float | Y 轴，相对于视口原点（viewport origin）矩形盒子的顶部。只读。 |
| width     | float | 矩形盒子的宽度（等同于 right 减 left）。只读。               |
| x         | float | X轴横坐标，矩形盒子左边相对于视口原点（viewport origin）的距离。只读。 |
| y         | float | Y轴纵坐标，矩形盒子顶部相对于视口原点（viewport origin）的距离。只读。 |

#### 2. 绝对定位

> 设置为绝对定位的元素框从文档流完全删除，并相对于其包含块定位，包含块可能是文档中的另一个元素或者是初始包含块。元素原先在正常文档流中所占的空间会关闭，就好像该元素原来不存在一样。元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框。

span设置绝对定位`position:absolute`，再设置`z-index:-1`，这样span就在最底层，不会遮挡a标签文字了。

