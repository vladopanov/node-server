const mongoose = require('mongoose')
const config = require('../../config')

mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true })
  .then(() => console.log('DB Connected!'))
  .catch(err => console.log(`DB Connection Error: ${err.message}`))
mongoose.Promise = global.Promise

module.exports = {
  User: require('../models/user')
}
