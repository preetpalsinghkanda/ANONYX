const User = require("../models/User");
const jwt = require("jsonwebtoken");

const loginHandle = async (req, res) => {
  try {
    const { secretCode, secretPin } = req.body;

    if (!secretCode || !secretPin) {
      return res.status(400).json({
        message: "Please Enter Secret Code and PIN :(",
      });
    }

    const user = await User.findOne({ secretCode });

    if (!user) {
      return res.status(401).json({
        message: "Wrong Secret Code or PIN",
      });
    }


    if (user.secretPin !== secretPin) {
      return res.status(401).json({
        message: "INCORRECT Secret Code or PIN"
      })

    }

    if (user.isBanned) {
      return res.status(403).json({
        message: "ID BANNED"
      })
    }

    if (!user.isActiveUser) {
      user.isActiveUser = true
      await user.save()

      //  res.status(200).json({
      //   message: "USER ACTIVATED :)"
      // })
    }

    const token = jwt.sign({
      id: user._id,

    }, process.env.JWT_KEY, { expiresIn: "4d" })



    return res.status(200).json({
      message: "WELCOME !", token,
      userInfo: {
        id: user._id,
        role: user.role,
        isActiveUser: user.isActiveUser,
        realName: user.realName,

      }
    })







  } catch (err) {
    return res.status(500).josn({
      message: err.message,
    });
  }
};

module.exports = { loginHandle };
