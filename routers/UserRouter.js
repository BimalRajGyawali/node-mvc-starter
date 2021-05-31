const express = require("express")
const router = express.Router()

const userController = require("../controllers/UserController")

router.get("/", userController.getAll)
router.get("/:id", userController.findById)


module.exports = router