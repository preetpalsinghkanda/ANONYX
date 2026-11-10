const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected!");
  } catch (err) {
    console.log("connection failed");
  }
};

module.exports = connect;
