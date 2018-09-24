const User = require('../models/modelUser')
const { bcryptDecoded, jwtSign, jwtVerify } = require('../helpers/helpser')

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
        let password = req.body.password

        let where = {
            email: req.body.email
        }

        User.findOne(where)
            .then(userData => {
                let hashPassword = userData.password
                console.log(userData);
                if (bcryptDecoded(password, hashPassword)) {
                    let token = jwtSign({
                        _id: userData._id,
                        email: userData.email,
                        username: userData.username,
                    })
                    // console.log(token)
                    // console.log(jwtVerify(token))
                    res.status(200).json({
                        data: token
                    })
                } else {
                    res.status(404).json({
                        message: 'Wrong email or password'
                    })
                }
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