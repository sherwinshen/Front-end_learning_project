const fs = require('fs');
// 10、管道流
// 创建一个可读流
const readerStream = fs.createReadStream('logs/test/jquery-3.4.1.js');
// 创建一个可写流
const writerStream = fs.createWriteStream('output.js');
// 管道读写操作 - 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);
