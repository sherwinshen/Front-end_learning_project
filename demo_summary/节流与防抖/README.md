# 节流与防抖

> 简介：节流与防抖
>
> 本文作者：[EnvisionShen](https://github.com/MrEnvision)
>
> 创建日期：2020-03-23



主要参考链接：[防抖和节流](https://www.cnblogs.com/zhuanzhuanfe/p/10633019.html)   [高性能滚动 scroll 及页面渲染优化](https://www.cnblogs.com/coco1s/p/5499469.html)



## 为什么要节流与防抖？

> click、scroll、 resize等会频繁触发某些事件回调，很可能会造成浏览器掉帧，甚至会使浏览器崩溃，影响用户体验，例如在回调中计算元素位置、做一些跟DOM相关的操作会引起浏览器回流和重绘等。基于这样的情况，常用的解决方案有防抖和节流。



## 防抖debounce

<img src='https://img2018.cnblogs.com/blog/1203274/201903/1203274-20190331203905184-1582905494.png' height=300>

将频繁触发的事件合并成成一次去执行，合并的条件是频繁触发的事件之间的时间间隔小于设置的delaytime。



## 节流throttle

<img src='https://img2018.cnblogs.com/blog/1203274/201903/1203274-20190331203920571-2084817011.png' height=300>

节流是只会在指定的时间段内执行事件回调，即触发事件间隔大于等于指定的时间才会执行回调函数。



------

如果发现本项目有内容上的错误，欢迎提交 issues 进行指正。