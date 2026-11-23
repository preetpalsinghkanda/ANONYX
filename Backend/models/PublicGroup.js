const mongoose = require("mongoose")

const publicGroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        // default: null,
        trim:  true,
    },
    type: {
        type: String,
        enum: ["public", "group"],
        default: "public"
    }


}, { timestamps: true })

module.exports = mongoose.model("PublicGroup", publicGroupSchema)