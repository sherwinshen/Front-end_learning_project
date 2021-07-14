function Func1(){
    // this.name 外部可以直接访问
    this.name1 = 'name1';
    // 内部定义的变量外部无法访问，可通过方法属性获取
    const name2 = 'name2';
    this.getName = () => name2
}
const demo1 = new Func1();
console.log(demo1.name1); // name1
console.log(demo1.name2); // undefined
console.log(demo1.getName()); // name2


(function () {
    // 私有变量
    let name = 'name';
    // 构造函数
    Func2 = function () {
    }
    // 特权函数定义在原型上
    Func2.prototype.getName = () => name;
})();

const demo2 = new Func2();
console.log(demo2.name); // undefined
console.log(demo2.getName()); // name















// (function() {
//     let name = 'demo';
//     // 构造函数
//     function Person (){
//         newName = name
//     }
//     Person.prototype.getName = function (){
//         return newName
//     }
// })();
//
// const demo = Person();
// console.log(demo.getName())
//
// (function() {
//     // 私有变量
//     let name = 'demo';
//     // 构造函数
//     Person = function () {
//     };
//     // 在原型上定义方法
//     Person.prototype.getName = function() {
//         return name;
//     };
// })();


// class Func1 {
//
// }
