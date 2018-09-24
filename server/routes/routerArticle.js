const Router = require('express').Router()
const { createArticle, readArticle, readAllArticle, updateArticle, deleteArticle,addComment } = require('../controllers/controllerArticle')
const helper = require('../helpers/helpser')
Router
    .post('/create', createArticle)
    .post('/article', readArticle)
    .get('/articles', readAllArticle)
    .put('/update/:id', updateArticle)
    .put('/:id/addComment',helper.isLogin,addComment)
    .delete('/delete/:id', deleteArticle)

module.exports = Router