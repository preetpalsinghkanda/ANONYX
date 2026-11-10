const express = require('express')
require("dotenv").config()


const app = express()


app.get("/",(req,res)=>{
    res.send("server on")
})





app.listen(process.env.PORT ,()=>{
    console.log("working properly")
})