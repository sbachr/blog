const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
    comment: String,
    userId: { type: Schema.Types.ObjectId, ref: 'User' }

}, { timestamps: true })

module.exports = mongoose.model('Comment', commentSchema)