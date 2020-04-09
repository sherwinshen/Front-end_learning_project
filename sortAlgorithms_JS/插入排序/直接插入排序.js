// 描述：每一次元素逐步与前面已排好的元素比较，然后放到对应的位置中去

const insertSort = function (array) {

    for (let i = 1; i < array.length; i++) {
        let temp = array[i]
        let j = i;
        while (j > 0 && array[j - 1] > temp) {
            array[j] = array[j-1]
            j--;
        }
        array[j] = temp
    }
    return array;
}


let array1 = [-9, 0, 36, 98, 1, 8, 7, 10]
let array2 = [1, 1, 1, 1, 2, 2, 2, 0, 0, 0]
let res = insertSort(array1)
console.log(res)
