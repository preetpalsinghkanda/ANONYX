const express = require('express')

const app = express()


app.get("/",(req,res)=>{
    res.send("server on")
})





app.listen(3000 ,()=>{
    console.log("working properly")
})