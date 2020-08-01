const arr = [1, 1, 'true', 'true', true, true, 15, 15, false, false, undefined, undefined, null, null, NaN, NaN, 'NaN', 0, 0, 'a', 'a', {}, {}];


// set
const demo1 = [...new Set(arr)];
const demo2 = Array.from(new Set(arr));
// console.log(demo1) // {}
// console.log(demo2) // {}

// obj
function func1(arr) {
    let obj = {};
    let array = [];
    for (let value of arr) {
        if (!(value in obj)) {
            array.push(value)
            obj[value] = true
        }
    }
    return array
}

// console.log(func1(arr)) // 都转成字符串，"true"和true被认为同一种

// indexOf
function func2(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (array.indexOf(arr[i]) === -1) {
            array.push(arr[i])
        }
    }
    return array;
}

// console.log(func2(arr)) // {} 和 NaN


// includes
function func3(arr) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (!array.includes(arr[i])) {
            array.push(arr[i])
        }
    }
    return array;
}

// console.log(func3(arr)) // {}

// sort
function func4(arr) {
    arr = arr.sort()
    let array = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            array.push(arr[i]);
        }
    }
    return array;
}

// console.log(func4(arr)) // {} 和 NaN

// map
function func5(arr) {
    let map = new Map();
    let array = []
    for (let value of arr) {
        if (!map.has(value)) {
            map.set(value, true)
            array.push(value)
        }
    }
    return array
}

// console.log(func5(arr)) // {}

