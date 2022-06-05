const classService = require("../services/classService")

const getAllClasses = async (req, res) => {
    const allClasses = classService.getClasses()
    res.send({
        status: "OK",
        data: allClasses
    });
}

const getOneClass = async (req, res) => {
    const _class = classService.getOneClass()
    res.send("Get an existing class")
}

const createNewClass = async (req, res) => {
    const createdClass = classService.createOneClass()
    res.send("Create a new class")
}

const updateOneClass = async (req, res) => {
    const updatedClass = classService.updateOneClass()
    res.send("Update an existing class")
}

const deleteOneClass = async (req, res) => {
    const deletedClass = classService.deleteOneClass()
    res.send("Delete an existing class")
}

module.exports = {
    getAllClasses,
    getOneClass,
    createNewClass,
    updateOneClass,
    deleteOneClass
}