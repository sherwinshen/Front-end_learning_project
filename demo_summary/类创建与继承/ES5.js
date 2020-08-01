function Animal(name) {
    // 实例属性
    this.name = name;
    this.features = []
    // 实例方法
    this.sleep = function () {
        console.log(this.name + '正在睡觉！');
    }
    this.addFeature = function (feature) {
        this.features.push(feature)
    }
}

Animal.prototype.age = 16
Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃：' + food);
};

// 1、原型链继承
function Cat1() {

}

Cat1.prototype = new Animal();
Cat1.prototype.name = 'Cat'

// Test
console.log('1、原型链继承')
const cat1_1 = new Cat1()
const cat1_2 = new Cat1()
// 针对父类实例"值类型"成员的更改，不影响
cat1_1.name = 'cat1_1'
cat1_1.sleep() // cat1_1正在睡觉！
cat1_2.sleep() // Cat正在睡觉！
// 针对父类实例"引用类型"成员的更改，子类实例均会改变
cat1_1.addFeature('happy')
console.log(cat1_1.features) // [ 'happy' ]
console.log(cat1_2.features) // [ 'happy' ]


// 2、构造继承
function Cat2(name) {
    Animal.call(this, name);
}

// Test
console.log('2、构造继承')
const cat2_1 = new Cat2('cat2_1')
const cat2_2 = new Cat2('cat2_2')
// 不能继承父类原型的方法与属性
// console.log(cat2_1.age) // undefined
// cat2_2.eat() // TypeError
// 子类实例不影响父类实例，因为每一次都创建了新的父类实例，不是通过原型继承的
cat2_1.addFeature('happy')
console.log(cat2_1.features) // [ 'happy' ]
console.log(cat2_2.features) // [ '' ]


// 3、实例继承
function Cat3(name) {
    const cat = new Animal(name);
    cat.age = 18 // 实例添加属性
    return cat
}

// Test
console.log('3、实例继承')
const cat3_1 = new Cat3('cat3_1')
cat3_1.sleep()
cat3_1.eat('milk')
console.log(cat3_1.age)


// 4、拷贝继承
function Cat4(name) {
    const animal = new Animal(name);
    for (let pro in animal) {
        Cat4.prototype[pro] = animal[pro];
    }
}

// Test
console.log('4、拷贝继承')
const cat4_1 = new Cat4('cat4_1')
cat4_1.sleep()
cat4_1.eat('milk')

// 5、组合继承
function Cat5(name) {
    Animal.call(this, name);
}

Cat5.prototype = new Animal();
Cat5.prototype.constructor = Cat5;

// Test
console.log('5、组合继承')
const cat5_1 = new Cat4('cat5_1')
cat5_1.sleep()
cat5_1.eat('milk')
console.log(cat5_1.age)

// 6、组合寄生继承
function Cat(name) {
    Animal.call(this, name);
}

(function () {
    // 创建一个没有实例方法的类
    const Super = function () {};
    // 将实例作为子类的原型
    Super.prototype = Animal.prototype;
    Cat.prototype = new Super();
})();

// Test
console.log('6、组合寄生继承')
const cat6_1 = new Cat4('cat6_1')
cat6_1.sleep()
cat6_1.eat('milk')
console.log(cat6_1.age)

