const Class = require("../database/Class");

const getClasses = () => {
    const allClasses = Class.getAllClasses();
    return allClasses;
}
const getOneClass = () => {
    return;
}
const createOneClass = () => {
    return;
}
const updateOneClass = () => {
    return;
}
const deleteOneClass = () => {
    return;
}


module.exports = {
    getClasses,
    getOneClass,
    createOneClass,
    updateOneClass,
    deleteOneClass
}