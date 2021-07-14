var express = require('express');
var router = express.Router();
var Teacher = require('./../model/teachers');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/teacher', function (req, res, next) {
    const param = {'name': 'chen'};
    Teacher.findOne(param, function (err, doc) {
        if (err) {
            res.json({
                status: "1",
                msg: err.message
            });
        } else {
            if (doc) {
                res.json({
                    status: '0',
                    msg: '查询成功',
                    result: doc
                });
            } else {
                res.json({
                    status: '2',
                    msg: '暂无课程',
                    result: doc
                });
            }

        }

    })

});

module.exports = router;
