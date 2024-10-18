const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Username: {
        type: String,
        required: true,
        unique: true, // Đảm bảo tên đăng nhập là duy nhất
    },
    Passwork: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Visitor', userSchema);
