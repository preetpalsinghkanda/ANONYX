const express = require("express");
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({

    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    message: {
        type: String,
        required: true,
        trim: true,
    },
    chatType: {
        type: String,
        enum: ["public", "private", "group"],
        required  : true,

    },
    publicGroupId :{
        type : mongoose.Schema.Types.ObjectId,
        // default:
        ref : "Room"
    },
    receiver : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

},
    {
        timestamps: true,
    }


)

const Message = mongoose.model("Message", messageSchema)

module.exports = Message