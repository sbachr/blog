require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const logger = require('morgan')
const port = 3000
const cors = require('cors')

const RouterUser = require('./routes/routerUser')
const RouterArticle = require('./routes/routerArticle')
const RouterComment = require('./routes/routerComment')

let database = process.env.DATABASE_DEV
if (process.env.NODE_ENV == 'test') {
    database = process.env.DATABASE_TEST
} else if (process.env.NODE_ENV == 'prod') {
    database = process.env.DATABASE_PROD
}

mongoose.connect(database, { useNewUrlParser: true })
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '))
db.once('open', function(){
    console.log(`Database in connect ${process.env.NODE_ENV}`);
})

app.use(logger('dev'))
app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use('/', RouterUser)
app.use('/article', RouterArticle)
app.use('/comment', RouterComment)



app.listen(port, function(){
    console.log(`Server is running at port ${port}`);
})


