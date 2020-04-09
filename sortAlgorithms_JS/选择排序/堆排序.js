// 堆是一个完全二叉树。
// 大顶堆：根结点为最大值，每个结点的值大于或等于其孩子结点的值。
// 小顶堆：根结点为最小值，每个结点的值小于或等于其孩子结点的值。
// 堆的存储： 堆由数组来实现，相当于对二叉树做层序遍历。


const heapSort = function (array) {
    const swap = function (array, i, j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    // 实现大顶堆，关键步骤！！！
    const shiftDown = function (array, i, length) {
        // let temp = array[i]; // 当前父节点
        for (let j = 2 * i + 1; j < length; j = 2 * j + 1) { // j = 2 * i + 1后面的元素为子元素，需要比父节点小
            if (j + 1 < length && array[j] < array[j + 1]) {
                j++; // 找到两个孩子中较大的一个，再与父节点比较
            }
            if (array[i] < array[j]) {
                swap(array, i, j)
                i = j;
            } else {
                break;
            }
        }
    }
    // 初始化大顶堆
    for (let i = Math.floor(array.length / 2 - 1); i >= 0; i--) {
        shiftDown(array, i, array.length);
    }
    // 排序，每一次for循环找出一个当前最大值，数组长度减一
    for (let i = Math.floor(array.length - 1); i > 0; i--) {
        swap(array, 0, i);
        shiftDown(array, 0, i); // 从
    }
    return array
}


let array1 = [-9, 0, 36, 98, 1, 8, 7, 10]
let array2 = [1, 1, 1, 1, 2, 2, 2, 0, 0, 0]
let res = heapSort(array1)
console.log(res)

