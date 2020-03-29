// 1、最简单的http服务器
const http = require('http')
const server = http.createServer(function (req, res) {
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"}); //插入响应头
    if (req.url === '/index.ejs') {
        res.write('This is demo.')
    } else {
        res.write('404')
    }
    res.end();
});

server.listen(3000, function () {
    console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/ 来进行访问')
});

// 2、最简单的文件操作
const fs = require('fs');
// 写文件 - fs.writeFile('文件名','内容',function(err){})
fs.writeFile('demo.txt', 'This is a demo.', function (err) {
    if (err) console.log(err)
})

// 读文件 - fs.readFile('文件名',function(err, data){})
fs.readFile('demo.txt', function (err, data) {
    if (err) {
        console.log(err)
    } else {
        console.log(data) // 默认为二进制
        console.log(data.toString()) // 转成字符串
    }
})
