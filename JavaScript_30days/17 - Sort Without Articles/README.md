# 实现效果

初始文件`index-start.html`中提供了一个无序列表元素，并在`script`标签中提供了一个字符串数组，为字符串数组排序，要求去除字符串中的`The`，`A`以及`An`的前缀后再进行排序，并把排序后的结果作为列表项展示在无序列表中。



# 解决步骤

1. 去除前缀
2. 数组排序
3. 内容显示



# 知识点

#### 1. 去除前缀 - 正则表达式

`item.replace(/^(The|A|An)\s{1}/,'');`

#### 2. 数组排序 - sort函数

`array.sort(sortfunction)`

#### 3. 内容显示 - innerHTML

`innerHTML = '<li>'+arr.join('</li><li>')+'</li>';`

