
const express = require("express")
const router = express.Router()

const { loginHandle } = require("../controllers/authController")

router.use("/login", loginHandle)


module.exports = router