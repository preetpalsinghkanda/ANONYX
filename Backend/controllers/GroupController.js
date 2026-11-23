const PublicGroup = require("../models/PublicGroup")

const createGroup = async (req, res) => {

    try {
        const { name } = req.body

        if (!name.trim()) {
            return res.status(400).json({
                message: "Group name required "
            })
        }

        const isGroupExist = await publicGroupSchema.findOne({
            name: name.trim()
        })

        if (isGroupExist) {
            return res.status(400).json({
                message: "Group already exists"
            })
        }



        const group = await PublicGroup.create({
            name: name.trim(),
            type: "public",

        })

        return res.status(201).json({
            message: "Group created!",
            group,
        })

    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            message: "SERVER ERR:("
        })
    }
}

const getGroup = async (req, res) => {


    try {
        const groups = PublicGroup.find({
            type: "public",

        })

    } catch (err) {

        return res.status(500).json({
            message: "SERVER ERR:("
        })
    }
}

module.exports = { createGroup, getGroup }