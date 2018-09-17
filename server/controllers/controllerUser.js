const User = require('../models/modelUser')
const jwt = require('jsonwebtoken')

module.exports = {

    register: (req, res) => {

        let where = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }

        User.create(where)
            .then(dataRegister => {
                res.status(200).json({
                    msg: `User Account has been Create`,
                    data: dataRegister
                })
            })
            .catch(err => {
                res.status(500).json({ error: err.message })
            })
    },

    login: (req, res) => {
        let where = {
            email: req.body.email
        }

        User.findOne(where)
            .then(userData => {
                res.status(200).json({
                    data: userData
                })
            })
            .catch(err => {
                res.status(500).json({ error: err.message })
            })
    },

    users: (req, res) => {
        User.find()
            .then(users => {
                res.status(200).json({
                    data: users
                })
            })
            .catch(err => {
                res.status(500).json({ error: err.message })
            })
    }
}