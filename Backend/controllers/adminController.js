const user = require("../models/User");
const genSecretCode = require("../utils/secretCode");

const createUser = async (req, res) => {
  try {
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
