const express = require('express')
const router = express.Router()
const classController = require('../../controllers/classController')

router.get("/", classController.getAllClasses)

router.get("/:classId", classController.getOneClass)

router.post("/", classController.createNewClass)

router.patch("/:classId", classController.updateOneClass)

router.delete("/:classId", classController.deleteOneClass)

module.exports = router