const express = require("express")
const router = express.Router()

const userController = require("../controllers/UserController")

router.get("/", userController.getAllUsers)
router.get("/:id", userController.getById)


module.exports = router