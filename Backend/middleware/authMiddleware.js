const express = require("express")
const jwt = require("jsonwebtoken")
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {

    try {

        const authHeader = req.headers.authorization

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Token Needed for Authentication"
            })
        }


        const token = authHeader.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        const user = await User.findById(decoded.id)


        if (!user) {
            return res.status(401).json({
                message: "User NOT Registered"
            })
        }


        if (user.isBanned) {
            return res.status(403).json({
                message: 'USER BANNED :('
            })
        }

        req.user = user
        next()

    } catch (err) {

        return res.status(403).json({
            message: "Token Expired or NOT Valid"
        })

    }
}

module.exports = authMiddleware