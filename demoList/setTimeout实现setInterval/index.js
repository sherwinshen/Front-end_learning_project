const func = function () {
    console.log('hello world')
}

const newSetInterval = function (func, time) {
    const newFunc = function(){
        func();
        setTimeout(newFunc,time)
    }
    setTimeout(newFunc, time)
}

newSetInterval(func, 1000);
