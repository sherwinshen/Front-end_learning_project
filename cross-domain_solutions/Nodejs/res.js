const express = require('express')
const app = express()

app.get('/api', (req, res) => {
    res.json({
        'name': req.query
    })
})

app.listen(8080)
