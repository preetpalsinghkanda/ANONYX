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

    secretPin: {
      type: Number,
      // unique : true ,
      required: true,
    },

    secretCode: {
      type: String,
      unique: true,
      required: true,
    },

    isActiveUser: {
      type: Boolean,
    },

    isBanned: {
      type: Boolean,
      default: false,
    },
    isVIP: {
      type: Boolean,
      required: true,
      default: false,
    },
    description: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  },
);

const user = mongoose.model("user", userSchema);

module.exports = user;
