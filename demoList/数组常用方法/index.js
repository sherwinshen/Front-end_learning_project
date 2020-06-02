// 更改元素 - 均改变原数组
const a = [1, 2, 3]
a.push(4); // 返回数组的长度
a.pop(); // 返回删除的元素
a.unshift(4); // 返回数组的长度
a.shift(); // 返回删除的元素
a.splice(1, 2, 4); // 返回删除的元素

// 查询元素
const b = [1, 2, 4, 2, 1]
console.log(b.find(value => value > 1))
console.log(b.findIndex(value => value > 1))
console.log(b.indexOf(2))
console.log(b.lastIndexOf(2))
console.log(b.includes(2))

// 其他
console.log([1, 2, 3].concat([1, 2, 3]))
console.log(['1', '2', '11'].sort())
console.log(Array.isArray([1, 2, 3]))
const c = new Array(5);
console.log(c.fill('5'));
console.log([1, 2, 3, 4, 5, 6].slice(1, 3))
console.log([1, 2, 3, 4, 5, 6].join('-'))


// 检查
console.log([1, 2, 3].every(value => value >= 2))
console.log([1, 2, 3].some(value => value >= 2))
console.log([1, 2, 3].filter(value => value >= 2))


// 遍历
// forEach()
const d = [1, 2, 3, 4, 5]
const e = []
d.forEach(value => {
    if (value > 3) e.push(value)
})
console.log(e)
// map()
const f = [1, 2, 3, 1, 4, 5, 2]
console.log(f.map(value => value + 1))
// reduce()
const g = [1, 2, 3, 1, 4, 5, 2]
console.log(g.reduce((previousValue, currentValue) => {
    return previousValue * currentValue
}))


