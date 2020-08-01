// 1、创建
class Animal {
    constructor(name) {
        this.name = name;
    }

    static getName(){
        console.log('static')
    }

    eat(food) {
        console.log(this.name + '正在吃：' + food);
    }
}

// 生成实例
const cat = new Animal('Telephone');
cat.eat('milk');
// cat.getName();  // TypeError，不能调用静态函数
Animal.getName();

// 2、类继承
class Cat extends Animal {
    constructor(name) {
        super(name) // 调用父类的构造函数
    }

    eat(food) {
        console.log(this.name + '想吃：' + food);
    }
}

const cat2 = new Cat('Dime')
cat2.eat('tea')
Cat.getName()
// cat2.getName() // TypeError
