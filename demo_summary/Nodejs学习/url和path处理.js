const http = require('http')
const url = require('url')
const path = require('path')

const server = http.createServer(function (req, res) {
    console.log("服务器接收到了请求" + req.url);

    let {pathname, query} = url.parse(req.url, true);
    console.log('pathname', pathname);
    console.log('query', query);

    //  /images/png/demo.png
    console.log('dirname', path.dirname(pathname)); // /images/png
    console.log('basename', path.basename(pathname)); // demo.png
    console.log('extname', path.extname(pathname)); // .png
    console.log('parse', path.parse(pathname));
    console.log('resolve', path.resolve(pathname));

    res.end();
});

server.listen(3000, function () {
    console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000/ 来进行访问')
});
