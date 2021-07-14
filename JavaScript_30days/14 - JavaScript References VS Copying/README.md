# 实现效果

了解在 JavaScript 中对不同类型数据的引用（Reference）和复制（Copy）的区别。



# 解决步骤

暂无



# 知识点

#### 1. 基础类型String, Number, Boolean

直接等号赋值即可

#### 2. 数组Array

当使用等号赋值的时候，使用的是地址，而不是具体的值，当一个改变的时候另一个也改变了，以下为几种数组真正复制的方法：

```javascript 
const arr1 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
// 方法1: Array.prototype.slice()
const arr2 = arr1.slice();
// 方法2: Array.prototype.concat()
const arr2 = [].concat(arr1);
// 方法3: ES6扩展语法
const arr2 = [...arr1];
// 方法4: Array.from()
const arr2 = Array.from(arr1);
```

#### 3. 对象Object

```javascript
const obj1 = {name: 'Wes Bos', age: 80};
// 方法1: Object.assign()
const obj2 = Object.assign({},obj1);
// 方法2: json转换
const obj2 = JSON.parse(JSON.stringify(obj1));
```

