// 每一次都选择为排序元素中最小的放到对应位置

const selectSort = function (array) {
    const swap = function (array, i, j) {
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    for (let i = 0; i < array.length - 1; i++) {
        let min = array[i];
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < min) {
                min = array[j];
                minIndex = j;
            }
        }
        swap(array, i, minIndex)
    }
    return array
}

let array1 = [-9, 0, 36, 98, 1, 8, 7, 10]
let array2 = [1, 1, 1, 1, 2, 2, 2, 0, 0, 0]
let res = selectSort(array1)
console.log(res)
