const express = require("express");
const router = express.Router();

const { createUser } = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware")

router.post("/create", authMiddleware, adminMiddleware, createUser);

module.exports = router;
