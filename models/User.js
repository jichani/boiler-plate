const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50,
    },
    email: {
        type: String,
        trim: true,
        unique: 1,
    },
    password: {
        type: String,
        minlength: 5,
    },
    lastname: {
        type: String,
        maxlength: 50,
    },
    role: {
        type: Number,
        default: 0,
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number
    }
})

const User = mongoose.model('User', userSchema)

module.exports = { User }

// 몽고디비에서 모델은 데이터의 구조를 정의하고, 스키마는 필드에 대한 제약 조건을 정의하는데 사용됩니다. 이러한 개념은 몽고디비를 사용하여 데이터를 조직화하고 저장하는 데 도움을 줍니다.
// trim은 띄어쓰기를 없애주는 것