const DB = require('./db.json')

const getAllClasses = () => {
    return DB.classes
}

module.exports = {
    getAllClasses
}