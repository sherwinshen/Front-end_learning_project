# 实现效果

Flex 实现可伸缩的图片墙。点击任意一张图片，图片展开，同时从图片上下两方分别移入文字。点击已经展开的图片后，图片被压缩，同时该图片上下两端的文字被挤走。



# 解决步骤

1. 利用Flex对整体页面进行布局
2. 为图片容器panel添加监听事件 - a)图片伸缩；b)文字飞入飞出
3. 根据flex-grow属性设置图片伸缩效果；根据transform属性设置文字的飞入飞出效果；



# 知识点

#### 1. Flex布局

```css
/* 父容器*/
.parent {
    display: flex; /* 指定为 Flex 布局 */
    /* 决定项目的排列方向 */
    flex-direction: row | row-reverse | column | column-reverse;
    /* 决定一条轴线排不下是否换行 */
    flex-wrap: nowrap | wrap | wrap-reverse;
    /* 定义了项目在主轴上的对齐方式 */
    justify-content: flex-start | flex-end | center | space-between | space-around;
    /* 定义项目在交叉轴上对齐方式 */
    align-items: flex-start | flex-end | center | baseline | stretch;
}
/*子项目*/
.child {
    /* 定义项目的排列顺序，数值越小，排列越靠前，默认为0 */
    order: < integer >;
    /* 定义项目的放大比例，默认为0，即存在剩余空间也不放大，若属性都为1，则等分空间，其他按数值比例分布 */
    flex-grow: < number >; /* default 0 */
    /* 定义项目的缩小比例，默认为1，即空间不足则项目将缩小 */
    flex-shrink: < number >; /* default 1 */
    /* 定义在分配多余空间之前，项目占据的主轴空间 */
    flex-basis: < length > | auto; /* default auto */

    /* flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto */
}
```

#### 2. transform - translate

> 2D变换 - translate()平移，传进x,y值，代表沿x轴和y轴平移的距离

#### 3. DOM classList 属性

`element.classList`属性返回元素的类名，作为 DOMTokenList 对象，该属性用于在元素中添加，移除及切换 CSS 类。

- `element.classList.add(class1, class2, ...)`添加类名
- `element.classList.contains(class)`判断类名是否存在
- `element.classList.remove(class1, class2, ...)`移除类名
- `element.classList.toggle(class, true|false)`切换类名，若类名存在则移除，若不存在则添加