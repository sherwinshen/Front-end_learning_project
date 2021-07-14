function f(y, z) {
    console.log(this.x + y + z);
}

// const newFunc1 = f.bind({x: '2'}, 1)
// newFunc1(3);

// 自定义bind函数
Function.prototype.newBind = function () {
    // 获取到新的上下文
    const context = arguments[0]
    // 保存当前的函数
    const func = this;
    // bind中带的参数
    let thisArgs = Array.prototype.slice.call(arguments, 1);
    const returnFunc = function () {
        // 合并参数
        thisArgs = thisArgs.concat(Array.from(arguments))
        // 使用apply改变上下文
        return func.apply(this instanceof func ? this : context, thisArgs)
    }
    // 继承原函数的原型
    const newFunction = function () {
    }
    newFunction.prototype = func.prototype;
    returnFunc.prototype = new newFunction();
    return returnFunc
}

const newFunc2 = f.newBind({x: '2'}, 1)
newFunc2(3);
