# HTML5 拖拽

> 简介：HTML5 拖拽功能介绍
>
> 本文作者：[EnvisionShen](https://github.com/MrEnvision)
>
> 创建日期：2020-03-03



事件主体主要分为被拖放元素和目标元素

- 事件主体为被拖放元素的api

  - dragstart：在开始拖放被拖放元素时触发
  - darg：在正在拖放被拖放元素时触发
  - dragend：在整个拖放操作结束时触发

- 事件主体为目标元素的api

  - dragenter：在被拖放元素进入某元素时触发
  - dragover：在被拖放在某元素内移动时触发
  - dragleave：在被拖放元素移出目标元素是触发
  - drop：在目标元素完全接受被拖放元素时触发

  

------

如果发现本项目有内容上的错误，欢迎提交 issues 进行指正。