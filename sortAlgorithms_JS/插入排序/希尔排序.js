// 改进自直接插入排序，设定一定的步长来进行插入排序

const shellSort = function (array) {
    for (let dk = Math.floor(array.length / 2); dk >= 1; dk = Math.floor(dk / 2)) {
        for (let i = dk; i < array.length; i++) {
            let temp = array[i];
            let j;
            for (j = i - dk; j >= 0 && temp < array[j]; j -= dk) {
                array[j + dk] = array[j]
            }
            array[j + dk] = temp
        }
    }
    return array;
}

let array1 = [-9, 0, 36, 98, 1, 8, 7, 10]
let array2 = [1, 1, 1, 1, 2, 2, 2, 0, 0, 0]
let res = shellSort(array1)
console.log(res)


