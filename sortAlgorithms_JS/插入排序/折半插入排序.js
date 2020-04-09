// 改进自直接插入排序，每次通过折半查找在前面已排好的元素中找到当前的元素位置，然后再移动

const binaryInsertSort = function (array) {
    const binarySearch = function (array, low, high, value) {
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (array[mid] > value) {
                high = mid - 1
            } else {
                low = mid + 1
            }
        }
        return low
    }
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[i - 1]) {
            let temp = array[i]
            let index = binarySearch(array, 0, i - 1, array[i])
            let j;
            for (j = i; j > index; j--) {
                array[j] = array[j - 1]
            }
            array[j] = temp
        }

    }
    return array
}


let array1 = [-9, 0, 36, 98, 1, 8, 7, 10]
let array2 = [1, 1, 1, 1, 2, 2, 2, 0, 0, 0]
let res = binaryInsertSort(array1)
console.log(res)
