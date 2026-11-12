const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    realName: {
      required: true,
      type: String,
      trim: true,
    },
    anonyxName: {
      type: String,
      // required :  true ,
      trim: true,
      default: "user",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    secretCode: {
      type: String,
      unique: true,
      required: true,
    },

    isActiveUser: {
      type: Boolean,
    },
  },

  {
    timestamps: true,
  },
);

const user = mongoose.model("user", userSchema);

module.exports = user;
