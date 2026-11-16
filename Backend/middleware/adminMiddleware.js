
const exprees = require("express")

const authMiddleware = async (req, res, next) => {

    try {

        if (req.user.role !== "admin") {
            return res.status(403).json({
                message: "ADMIN ONLY :>"
            })
        }

        next()

    } catch (err) {
        return res.status(500).json({
            message: err.message,
        })
    }
}

module.exports = authMiddleware