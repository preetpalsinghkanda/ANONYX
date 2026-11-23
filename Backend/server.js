const express = require("express");
require("dotenv").config();
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");
const jwt = require("jsonwebtoken")
const User = require("./models/User.js")

const Message = require("./models/Message.js")

const adminRoutes = require("./routes/admin.js");
const authRoutes = require('./routes/auth.js')

// const code = require("./utils/secretPin");

//database
const connectDataBase = require("./config/database");

const app = express();
const server = http.createServer(app);

const SI = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});


SI.use(async (socket, next) => {

  try {

    const token = socket.handshake.auth.token

    if (!token) {
      return next(new Error("Auth Needed"))

    }

    const decoded = jwt.verify(token, process.env.JWT_KEY)
    const user = await User.findById(decoded.id)


    if (!user) {
      return next(new Error("User not Found!"))
    }

    socket.user = user
    next()

  } catch (err) {

    console.log(err.message)
    next(new Error("Expired Token or Invalid Token"))
  }

})



//handle middleware
app.use(cors(

  {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,

  }
));


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

//admin routes
app.use("/admin", adminRoutes);



//auth route
app.use('/auth', authRoutes)





SI.on("connection", (socket) => {
  // console.log(socket.user.anonyxName, "connected");


  socket.on("join_public", async () => {

    await socket.join("public")
    console.log(socket.user.anonyxName, "Just Joined public chat", socket.rooms.has("public"))

  })

  socket.on("send_message", async (data) => {
    try {

      const msgText = data.message?.trim()

      if (!msgText || msgText.length > 998) {
        return
      }


      const newMsg = await Message.create({
        sender: socket.user._id,
        message: msgText,
        chatType: "public"
      })

      // console.log("mst saved", newMsg._id)
      const savedMessage = await Message.findById(newMsg._id).populate("sender", "anonyxName")




      SI.to("public").emit("receive_message", savedMessage)


    } catch (err) {
      console.log(err.message)
    }
  })


  socket.on("disconnect", () => {
    console.log(socket.user.anonyxName, "disconnect");
  });
});

//server running on this
server.listen(process.env.PORT, () => {
  console.log("working properly");
});
