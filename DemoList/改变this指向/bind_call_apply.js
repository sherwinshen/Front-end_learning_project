const cat = {
    name: 'jerry',
    eat: function (food) {
        console.log(this.name + ' eat ' + food)
    }
}

const mouse = {
    name: 'tom',
    eat: function (food) {
        console.log(this.name + ' eat ' + food)
    }
}

const eat = cat.eat.bind(mouse,'milk')
eat()

mouse.eat.call(cat,'milk')
mouse.eat.apply(cat,['milk'])