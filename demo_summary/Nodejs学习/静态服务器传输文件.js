const http = require('http');
const fs = require('fs');
const zlib = require('zlib');
const url = require('url');

const server = http.createServer((req, res) => {
    let {pathname} = url.parse(req.url, true);
    const readerStream = fs.createReadStream(pathname.substring(1, pathname.length));
    const gz = zlib.createGzip();

    // 响应之前告诉浏览器是gzip的格式
    res.setHeader("Content-Encoding", "gzip");
    readerStream.pipe(gz).pipe(res);

    //  读取失败，404错误
    readerStream.on('error', () => {
        res.removeHeader("Content-Encoding");
        res.writeHead(404, {
            "Content-Type": "text/html;charset=utf-8"
        });
        res.write("<h2>您访问的文件不存在</h2>");
        res.end()
    })

});

server.listen(3000, () => {
    console.log("服务器启动成功，端口：3000");
})

// 可以查看浏览器，通过gzip之后文件的大小明显有变小，同时告诉浏览器是gzip的格式，浏览器会自动解压(如果支持)。





