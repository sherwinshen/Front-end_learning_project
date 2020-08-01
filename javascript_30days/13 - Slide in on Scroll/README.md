# 实现效果

页面中的文章有几张配图，随着页面上下滚动，图片位置划过图片一半时，图片从两侧滑入；图片位置离开可见区域时，图片向两侧滑出。



# 解决步骤

1. 获取页面中的所有图片元素
2. 滚动事件监听 - window的滚动事件`scroll`
3. 尺寸获取及处理
4. 滚动至指定区域的条件判断



# 知识点

#### 1. 滑入效果

```css
.slide-in {
    opacity: 0;
    transition: all .5s;
}

.align-left.slide-in {
    transform: translateX(-30%) scale(0.95);
}

.align-right.slide-in {
    transform: translateX(30%) scale(0.95);
}

.slide-in.active {
    opacity: 1;
    transform: translateX(0%) scale(1);
}
```

#### 2. 图片位置判断

涉及页面尺寸的属性：

- `window.scrollY` 文档从顶部开始滚动过的像素值
- `window.innerHeight viewport` 部分的高度
- `ele.height` 元素的高度
- `ele.offsetTop` 当前元素顶部相对于其 offsetParent 元素的顶部的距离。

#### 3. debounce函数

> 降低事件监听的频率，使用了 Lodash 中的 debounce 方法。本例中每次滚动都触发监听事件，会降低JS运行性能，使用debounce函数来降低触发的次数。

```javascript
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// 使用方法
 window.addEventListener('scroll', debounce(checkSlide)); // checkSlide为监听处理函数
```

