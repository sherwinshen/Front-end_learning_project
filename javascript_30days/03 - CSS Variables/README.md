# 实现效果

用 JavaScript 和 CSS3 实现拖动滑块时，实时调整图片的内边距、模糊度、背景颜色，同时标题中 JS 两字的颜色也随图片背景颜色而变化。



# 解决步骤

实时更新样式参数通过CSS变量来实现。

1. 为input添加监听函数
2. 将更改数值更新到对应的CSS变量上



# 知识点

#### 1. HTML5 中的自定义数据属性 `dataset`

> HTML5中允许为元素添加非标准的自定义属性，只需要加上 `data-` 前缀，添加之后，可以通过元素的 `dataset` 属性来访问这些值——`dataset.属性名`

#### 2. CSS滤镜

```css
filter: blur(5px);
filter: brightness(0.4);
filter: contrast(200%);
filter: drop-shadow(16px 16px 20px blue);
filter: grayscale(50%);
filter: hue-rotate(90deg);
filter: invert(75%);
filter: opacity(25%);
filter: saturate(30%);
filter: sepia(60%);
```

#### 3. CSS变量（全局）

> `:root `这个 CSS 伪类匹配文档树的根元素，通常用于声明全局CSS变量，CSS中引入了变量的概念

```css
:root{
  --main-bg-color: brown;
  --pane-padding: 5px 42px;
}

/* 下文中通过var()使用--main-bg-color中的值 */
img {
  background-color: var(--main-bg-color);
}
```