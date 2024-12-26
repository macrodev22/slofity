const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: String,
    username: String,
    email: { type: String, required: [true, 'A user must have an email'] }
})

const User = mongoose.model('user', userSchema)

module.exports = User