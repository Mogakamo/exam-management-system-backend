const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useFindAndModify: false
    })

    .then(() => console.log("Connected to the database!"))
    .catch(err => console.log(err))

module.exports = mongoose