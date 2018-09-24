const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { bcryptEncoded } = require('../helpers/helpser')
const salt = 10

const userSchema = Schema({
    username: String,
    email: String,
    password: String
}, { timestamp: true })

userSchema.pre('validate',function(){
    this.password = bcryptEncoded(this.password,salt)
})
module.exports = mongoose.model('User', userSchema)