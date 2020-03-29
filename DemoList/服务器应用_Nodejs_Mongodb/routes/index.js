var express = require('express');
var router = express.Router();
var Teacher = require('./../model/teachers');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/test', function (req, res, next) {
    const param = {'name': 'chen'};
    Teacher.userFind(param, function (err, doc) {
        if (err) {
            res.json({
                status: "1",
                msg: err.message
            });
        } else {
            if (doc) {
                res.json({
                    status: '0',
                    result: doc
                });
            } else {
                res.json({
                    status: '2',
                    result: doc
                });
            }
        }
    })
});

module.exports = router;
