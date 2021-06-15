const mongoose = require('mongoose')

const DB_REMOTE =  'mongodb://localhost:27017/basic-crud'

mongoose
  .connect(DB_REMOTE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => console.info(`Successfully connected to the database basic-crud`))
  .catch((error) => {
    console.error(`An error ocurred trying to connect to de database basic-crud`, error)
    process.exit(0)
  })

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose disconnected on app termination')
    process.exit(0)
  })
}) 