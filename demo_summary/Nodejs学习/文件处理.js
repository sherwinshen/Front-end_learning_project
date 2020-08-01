const fs = require('fs');

// 1、检测是文件还是目录 - fs.stat
fs.stat('index.js', function (err, stats) {
    if (err) {
        console.log(err)
    } else {
        console.log(stats)
        console.log(`文件：${stats.isFile()}`)
        console.log(`目录：${stats.isDirectory()}`)
    }
})

// 2、创建目录 - fs.mkdir
fs.mkdir('logs/test', err => {
    if (err) console.log(err)
})

// 3、写文件 - fs.writeFile
fs.writeFile('demo.txt', 'Hello, world!', function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('成功写入文件')
    }
})

// 4、读文件 - fs.readFile
fs.readFile('demo.txt', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data) // 默认为二进制
        console.log(data.toString()) // 转成字符串，或toJSON()：buffer转化成Json
    }
})


// 5、追加文件 - fs.appendFile (如果没有文件则会生成文件，相当于创建文件)
fs.appendFile('demo.txt', 'This is a demo.', function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('成功写入文件')
    }
})

// 6、读取目录 - fs.readdir
fs.readdir('logs', function (err, files) {
    if (err) {
        console.log(err)
    } else {
        console.log(files)
    }
})

// 7、 重命名 - fs.rename
fs.rename('logs/demo.txt', 'logs/newDemo.txt', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('重命名成功')
    }
})

// 8、删除目录 - fs.rmdir
fs.rmdir('logs2', (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('成功的删除了目录：logs2')
    }
})

// 9、删除文件 - fs.unlink
const file = 'newDemo.txt'
fs.unlink(`logs/${file}`, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`成功的删除了文件: ${file}`) }
})


// 10、管道流
// 创建一个可读流
const readerStream = fs.createReadStream('demo.txt');
// 创建一个可写流
const writerStream = fs.createWriteStream('output.txt');
// 管道读写操作 - 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);
// 可以添加监听事件
readerStream.on("error", ex => {
    console.log("读取失败", ex);
});
readerStream.on("end", () => {
    console.log("读取完成");
});
writerStream.on("error", ex => {
    console.log("写入失败", ex);
});
writerStream.on("finish", () => {
    console.log("写入完成");
});


