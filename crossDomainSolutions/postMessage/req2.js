const express = require('express')
const app = express();

app.use(express.static(__dirname));

app.listen(8080, function () {
    console.log('Requester is listening on port 8080');
})
