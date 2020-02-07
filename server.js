const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const config = require('./config')
const jwt = require('./middlewares/jwt')
const errorHandler = require('./middlewares/errorHandler')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

// use JWT auth to secure the api
app.use(jwt())

// global error handler
app.use(errorHandler)

// api routes
app.use('/users', require('./controllers/userController'))

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : config.port
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port)
})
