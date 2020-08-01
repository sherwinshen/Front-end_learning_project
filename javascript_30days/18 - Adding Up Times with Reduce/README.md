# 实现效果

初始文件`index-start.html`中提供了一个包含多个列表项的无序列表元素，每一个列表项均添加了`data-time`属性，该属性用**分**和**秒**表示了时间。要求将所有的时间累加在一起，并用`时:分:秒`来表示计算的结果。



# 解决步骤

1. 获取li中所有的时间，转化为秒数
2. 利用reduce函数累加所有时间
3. 将累加的秒数时间格式化，并显示



# 知识点

#### 1. 时间格式化

```javascript
//总时间对60取余即为不足1分钟的秒数
var sec = seconds % 60;
//总时间除以3600并向下取整为小时数
var hour = Math.floor(seconds/3600);
//总时间减去前两项即可获得分钟数
var min = (seconds - 3600*hour - sec)/60;
```

#### 2. 数组累加 - reduce函数

`array.reduce(function(total, currentValue, currentIndex, arr), initialValue)`