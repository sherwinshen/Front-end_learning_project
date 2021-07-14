# 实现效果

网页模拟菜单的效果，在页面中添加新的菜品，而且在页面刷新之后也不清空。



# 解决步骤

1. 页面初显示为LocalStorage内容
2. 点击添加按钮，处理页面更新和LocalStorage存储
3. 点击List选项，更新LocalStorage存储内容



# 知识点

#### 1. localStorage

- 信息存储至本地localStorage：`localStorage.setItem('items', JSON.stringify(items));`
- 读取本地localStorage的内容：`JSON.parse(localStorage.getItem('items'))`

>  localStorage 里面只会储存 String 类型数据，如果传入的是非 String 则会直接使用 toString 转换，object对象会存储[object Object]，因此需要`JSON.stringify()` 将 Object 转换成 json 格式，读取出来之后再利用 `JSON.parse()` 转换为 Object。

