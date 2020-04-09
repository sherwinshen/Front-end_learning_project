// 直观上为，两两排序归并，直到合并为长度为n的有序数组，实现过程中采用递归，从中间分割，两部分递归，然后归并

const mergeSort = function (array) {
    const sort = function (array, start, end) {
        if (start < end) {
            let mid = Math.floor((start + end) / 2)
            sort(array, start, mid)
            sort(array, mid + 1, end)
            merge(array, start, mid, end)
        }
    }
    const merge = function (array, start, mid, end) {
        let tempArr = []
        let i, j;
        for (i = start, j = mid + 1, k = i; i <= mid && j <= end;) {
            if (array[i] < array[j]) {
                tempArr.push(array[i])
                i++;
            } else {
                tempArr.push(array[j])
                j++;
            }
        }
        while (i <= mid) {
            tempArr.push(array[i]);
            i++;
        }
        while (j <= end) {
            tempArr.push(array[j]);
            j++;
        }
        array.splice(start, end - start + 1, ...tempArr)
    }
    sort(array, 0, array.length - 1);
    return array
}

let array1 = [-9, 0, 36, 98, 1, 8, 7, 10]
let array2 = [1, 1, 1, 1, 2, 2, 2, 0, 0, 0]
let res = mergeSort(array1)
console.log(res)
