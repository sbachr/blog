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

    jwtEncoded: (obj) => {
        let token = jwt.sign(obj, process.env.SECRET_KEY || 'syaiful-key')
        return token
    },

    jwtDecoded: (obj) => {
        let decoded = jwt.verify(token, process.env.SECRET_KEY || 'syaiful-key')
        return decoded
    }
}