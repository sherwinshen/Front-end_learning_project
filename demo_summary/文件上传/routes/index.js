const express = require('express');
const router = express.Router();
const fs = require('fs')
const multer = require('multer');

const UPLOAD_PATH = './uploads'
const upload = multer({dest: UPLOAD_PATH}); // 设置缓存路径

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/upload', upload.single('file'), function (req, res) {
    // 文件信息
    if (!req.file) {
        res.send(req.error);
        res.end();
    }
    fs.readFile(req.file.path, function (err, data) {
        fs.writeFile(`./uploads/${req.file.originalname}`, data, function (err) {
            if (err) {
                res.json({ err });
            } else {
                // 需要将multer生成的文件进行删除
                fs.unlink(`./uploads/${req.file.filename}`, (error) => {
                    if (error) {
                        console.log(error)
                    } else {
                        console.log(`成功的删除了文件: ${req.file.filename}`) }
                })
                res.json({
                    message: 'File uploaded successfully',
                    filename: req.file.originalname
                });
            }
        });
    });
});

module.exports = router;
