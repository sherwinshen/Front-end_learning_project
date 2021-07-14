const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    "name": String,     // 教师工号
    "age": Number,      // 登陆密码
    "grade": String,   // 教师姓名
    "text": Array      // 创建时间
});

teacherSchema.statics.userFind = function (parameter, callback) {
    return this.find(parameter, (err, docs) => {
        callback(err, docs)
    })
}


module.exports = mongoose.model("Teacher", teacherSchema);
