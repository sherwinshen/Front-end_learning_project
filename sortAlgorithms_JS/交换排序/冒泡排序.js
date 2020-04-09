// 不断冒泡交换，每一趟排序将未排序中最大的元素放到了位置

const bubbleSort = function (array) {
    const swap = function (array, i, j) {
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    for (let i = 0; i < array.length - 1; i++) {
        let flag = false;
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(array, j, j + 1)
                flag = true
            }
        }
        if(!flag) break;
    }
    return array
}

let array1 = [-9, 0, 36, 98, 1, 8, 7, 10]
let array2 = [1, 1, 1, 1, 2, 2, 2, 0, 0, 0]
let res = bubbleSort(array2)
console.log(res)

