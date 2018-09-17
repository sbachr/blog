const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    articleName: String,
    description: String,
    userId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true })


module.exports = mongoose.model('Article', articleSchema)