// 分治的思想：选择一个基准，如果比基准小，则交换两个位置，一趟排序后基准左边都是比基准小的，右边都是比基准大的，并且基准在自身的位置上了

// 本demo的基准pivot设置为第一个元素
const quickSort = function (array) {
    const quick = function (array, start, end) {
        if (start < end) {
            let left = start;
            let right = end;
            let pivot = array[left];
            while (left < right) {
                while (left < right && array[right] >= pivot) right--;
                array[left] = array[right];
                while (left < right && array[left] <= pivot) left++;
                array[right] = array[left]
            }
            array[left] = pivot
            quick(array, start, left-1);
            quick(array, left+1, end);
        }
    }
    quick(array, 0, array.length - 1);
    return array
}

let array1 = [-9, 0, 36, 98, 1, 8, 7, 10]
let array2 = [1, 1, 1, 1, 2, 2, 2, 0, 0, 0]
let res = quickSort(array1)
console.log(res)

