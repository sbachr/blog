const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = Schema({
    username: String,
    email: String,
    password: String
}, { timestamp: true })

module.exports = mongoose.model('User', userSchema)