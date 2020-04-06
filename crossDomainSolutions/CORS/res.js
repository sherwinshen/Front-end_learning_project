const express = require('express')
const app = express()

// // 解析application/json数据
// const bodyParser=require("body-parser");
// const jsonParser = bodyParser.json();

const allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
};
app.use(allowCrossDomain);
app.get('/', (req, res) => {
    res.json({
        'name':req.query
    })
})

app.listen(8080)
