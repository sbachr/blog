const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Comment = require('./modelComment')


const articleSchema = new Schema({
    articleName: String,
    description: String,
    category: { type: Schema.Types.ObjectId, ref: 'Category' },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    comments: [Comment.schema]
}, { timestamps: true })


module.exports = mongoose.model('Article', articleSchema)