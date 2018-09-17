const Router = require('express').Router()
const { register, users, login } = require('../controllers/controllerUser')

Router
    .post('/register', register)
    .post('/login', login)

    .get('/users', users)



module.exports = Router