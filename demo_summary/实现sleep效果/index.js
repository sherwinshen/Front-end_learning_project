//需求：经过3s后输出hello

// promise对象
function wait(num) {
    return new Promise(resolve => {
        setTimeout(resolve, 1000 * num)
    })
}

wait(3).then(() => {
    console.log('hello')
})

// generator函数
function* sleep1(ms) {
    yield new Promise(resolve => {
        setTimeout(resolve, ms * 1000)
    })
}

sleep1(3).next().value.then(() => console.log('hello'))

// async/await
async function sleep2(ms) {
    await new Promise(resolve => {
        setTimeout(resolve, ms * 1000)
    })
    console.log('hello');
}
sleep2(3);
