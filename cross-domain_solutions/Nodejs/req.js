const express = require('express')
const app = express();
const proxy = require('http-proxy-middleware');

app.use(express.static(__dirname));

app.use('/api', proxy({
    target: 'http://localhost:8080',
    changeOrigin: true
}))


app.listen(3000, function () {
    console.log('Requester is listening on port 3000');
})

