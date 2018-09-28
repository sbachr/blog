const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {

    bcryptEncoded: (password, saltValue = 10) => {
        let salt = bcrypt.genSaltSync(saltValue)
        let hash = bcrypt.hashSync(password, salt)
        return hash
    },

    bcryptDecoded: (passwordCheck, passwordDb) => {
        let check = bcrypt.compareSync(passwordCheck, passwordDb)
        return check
    },

    jwtSign: (obj) => {
        let token = jwt.sign(obj, process.env.SECRET_KEY || 'syaiful-key')
        return token
    },

    isLogin: function (req, res, next) {
        jwt.verify(req.headers.authorization, process.env.SECRET_KEY, function (err, decoded) {
            if (!err) {
                req.user = decoded
                console.log(req.user, 'ini req user')
                next()
            } else {
                res.status(500).json({ message: err })
            }
        })
    },

}

// console.log(bcryptEncoded(''))

// console.log(bcryptDecoded('test', "$2b$10$N3cZMyEJtiMTmUj/fUYiGuKIAT8X3mAr5je8Undra4uZP.2e15/gK"));

// let token = jwtEncoded({
//     name: 'syaiful',
//     password: 'test123'
// });

// console.log(token)


// console.log(jwtDecoded(token))

