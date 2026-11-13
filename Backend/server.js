const express = require("express");
require("dotenv").config();
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");

// const code = require("./utils/secretPin");

//database
const connectDataBase = require("./config/database");

const app = express();
const server = http.createServer(app);

const SI = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

//handle middleware
app.use(cors());
app.use(express.json());

//mongo connect
connectDataBase();

//test route !
app.get("/", (req, res) => {
  res.status(200).json({
    message: "server on",
    // secretCode: code(),
  });
});

SI.on("connection", (socket) => {
  console.log(socket.id, "connected");

  socket.on("disconnect", () => {
    console.log(socket.id, "disconnect");
  });
});

//server running on this
server.listen(process.env.PORT, () => {
  console.log("working properly");
});
