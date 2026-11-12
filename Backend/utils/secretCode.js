const crypto = require("crypto");

const genSecretCode = () => {
  return crypto.randomBytes(4).toString("hex").slice(0, 5).toUpperCase();
};

module.exports = genSecretCode;
