const mongoose = require("mongoose")
const User = require("../models/User")
const ObjectId = mongoose.Types.ObjectId
const usersId = async (id) => {
    try {
        const userId = await User.find({
            _id: mongoose.Types.ObjectId(id),
        }).clone()

        if (userId.length < 1)
            throw new Error(`No existe usuario con id "${id}".`)
        return userId
    } catch (err) {
        throw err
    }
}

module.exports = { usersId }
