# 实现效果

根据用户当前的鼠标位置来操纵文字阴影的位置。



# 解决步骤

1. 为鼠标添加监听事件
2. 获取鼠标移动的数据
3. 计算文字阴影的位置



# 知识点

#### 1. HTML DOM contentEditable 属性

> contentEditable 属性用于设置或返回元素的内容是否可编辑。

本例中`<h1 contenteditable>🔥WOAH!</h1>`表示`h1`标签文字可编辑

#### 2. 文字阴影

语法：`text-shadow: h-shadow v-shadow blur color;`

| 值         | 描述                             |
| :--------- | :------------------------------- |
| *h-shadow* | 必需。水平阴影的位置。允许负值。 |
| *v-shadow* | 必需。垂直阴影的位置。允许负值。 |
| *blur*     | 可选。模糊的距离。               |
| *color*    | 可选。阴影的颜色。               |

> text-shadow 属性向文本添加一个或多个阴影，通过逗号分隔

