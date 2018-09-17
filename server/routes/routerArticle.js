const Router = require('express').Router()
const { createArticle, readArticle, readAllArticle, updateArticle, deleteArticle } = require('../controllers/controllerArticle')

Router
    .post('/create', createArticle)
    .post('/article', readArticle)
    .get('/articles', readAllArticle)
    .put('/update/:id', updateArticle)
    .delete('/delete/:id', deleteArticle)

module.exports = Router