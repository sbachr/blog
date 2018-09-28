const Comment = require('../models/modelComment')
const Article = require('../models/modelArticle')

module.exports = {

    createComment : (req,res) => {

        Comment.create({
            comments : req.body.comment,
            user : req.id
        })

        // dataComment.save()
        .then(comment => {
            console.log(comment)
            Article.findByIdAndUpdate(
                { _id : req.params.id},
                {$push : {comments : comment._id}}
            )
            res.status(200).json({ comment })
        })
    },

    findAllCommnet : (req,res) => {
        
        Comment.find()
        .then( data => {
            res.status(200).json({ data })
        })
        .catch(err => {
            res.status(500).json({ err })
        })
    },

    updateComment : (req,res) => {


    }

    
}