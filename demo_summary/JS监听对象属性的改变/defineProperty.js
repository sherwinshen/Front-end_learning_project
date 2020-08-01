const obj = {
    x: 1,
    y: {
        m: 2,
        n: 3
    }
}

Object.defineProperty(obj, 'z', {
    get: function () {
        console.log('get: ', z)
        return z + 1
    },
    set(newValue) {
        z = newValue;
        console.log('set :', newValue);
    }
})


obj.z = 5;
console.log(obj.z);
obj.x = 4;

