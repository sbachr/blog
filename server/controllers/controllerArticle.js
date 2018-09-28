const Article = require('../models/modelArticle')

module.exports = {

    createArticle: (req, res) => {

        Article.create({
            articleName: req.body.articleName,
            description: req.body.description,
            author: req.body._id
        })
            .then(articleData => {
                res.status(200).json({
                    articleData
                })
            })
            .catch(err => {
                res.status(500).json({ error: err.message })
            })
    },

    readArticle: (req, res) => {
        let where = {
            _id: req.body.id
        }
        Article.findOne(where)
            .then(articleOne => {
                res.status(200).json({
                    msg: `Success find article`,
                    data: articleOne
                })
            })
            .catch(err => {
                res.status(500).json({ error: err.message })
            })
    },

    readAllArticle: (req, res) => {

        Article.find()
            // .sort([['createdAt', 'discending']])
            .populate('author')
            .populate('comment')
            .then(articleAll => {
                res.status(200).json({
                    msg: `Success find article`,
                    data: articleAll
                })
            })
            .catch(err => {
                res.status(500).json({ error: err.message })
            })
    },

    updateArticle: (req, res) => {
        let where = {
            _id: req.params.id
        }
        let value = {
            $set: {
                articleName: req.body.articleName,
                description: req.body.description
            }
        }

        Article.update(where, value)
            .then(updateData => {
                res.status(200).json({
                    msg: 'Success update data',
                    data: updateData
                })
            })
            .catch(err => {
                res.status(500).json({ error: err.message })
            })
    },

    deleteArticle: (req, res) => {

        Article.deleteOne({
            _id: req.params.id
        })
            .then(deleteData => {
                res.status(200).json({
                    msg: `Success Delete data`
                })
            })
            .catch(err => {
                res.status(500).json({ error: err.message })
            })
    },

    addComment: (req, res) => {
        let obj = {
            userId: req.user._id,
            comment: req.body.comment
        }
        Article.findByIdAndUpdate(req.params.id, {
            $push: {
                comments: obj
            }
        }, { new: true }).populate('comments.creator').exec((err, data) => {
            if (err) {
                res.status(500).json({ message: err })
            } else {
                res.status(200).json({ message: 'ngomen', data: data })
            }
        })

    }
}