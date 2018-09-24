const Router = require('express').Router()
const { createComment, findAllCommnet } = require('../controllers/controllerComment')
const helper = require('../helpers/helpser')

Router
.post('/create/:id',helper.isLogin, createComment)
.get('/', findAllCommnet)

module.exports = Router