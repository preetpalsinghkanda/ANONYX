const User = require("../models/User");
const genSecretCode = require("../utils/secretCode");

const createUser = async (req, res) => {
  try {
    const { realName, email, isVIP, description } = req.body;
    const secretCode = genSecretCode();

    const alreadyUser = await User.findOne({ email });

    if (alreadyUser) {
      return res.status(400).json({
        message: "user already in db",
      });
    }

    const newUser = await User.create({
      isActiveUser: false,
      realName,
      email,
      secretCode,
      secretPin,
      isVIP,
      description,
    });

    return res.status(200).json({
      message: "user registered!",
      success: true,
      userInfo: {
        realName: newUser.realName,
        email: newUser.email,
        isActiveUser: newUser.isActiveUser,
        isVIP: newUser.isVIP,
        description: newUser.description,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
