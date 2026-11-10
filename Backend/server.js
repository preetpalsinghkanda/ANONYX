const express = require("express");
require("dotenv").config();

const connectDataBase = require("./config/database");

const app = express();

connectDataBase();

app.get("/", (req, res) => {
  res.send("server on");
});

app.listen(process.env.PORT, () => {
  console.log("working properly");
});
