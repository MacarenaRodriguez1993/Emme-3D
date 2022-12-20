const User = require("../models/User")
async function getUsers() {
    try {
        const users = await User.find()
        if (users.length < 1)
            throw new Error("NO HAY USUARIOS EN LA BASE DE DATOS")
        return users
    } catch (err) {
        throw err
    }
}

module.exports = {
    getUsers,
}
