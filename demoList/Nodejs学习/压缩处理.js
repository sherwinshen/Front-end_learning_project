const fs = require('fs')
const zlib = require('zlib')


const readerStream = fs.createReadStream('demo.txt');
const gz = zlib.createGzip();
const writerStream = fs.createWriteStream('demo2.txt');

// readerStream水龙头先传给了gz，gz又当一个水龙头传给了writerStream
readerStream.pipe(gz).pipe(writerStream);

writerStream.on("finish", () => {
    console.log("写入完毕");
});

