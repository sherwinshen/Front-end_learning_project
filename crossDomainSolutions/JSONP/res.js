const express = require('express')
const app = express();

app.get('/', (req, res) => {
    console.log(req.query)
    const name = `${req.query.user} Shen`;
    res.send(`${req.query.callback}('${name}')`)
})


app.listen(8080, function () {
    console.log('Requester is listening on port 8080');
})
