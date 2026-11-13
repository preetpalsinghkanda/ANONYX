const express = require("express");
const router = express.Router();

const { createUser } = require("../controllers/adminController");

router.post("/create", createUser);

module.exports = router;
