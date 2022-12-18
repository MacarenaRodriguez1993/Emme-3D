const { createUser, getUsers } = require("../controllers/userController")
const { createUser } = require("../controllers/userController")

// USERS
async function getAllUsers() {
    try {
        const users = await getUsers()
        return users
    } catch (err) {
        throw err
    }
}
function getUsersById(id) {}
async function createUsers(user) {
    try {
        const createdUser = await createUser(user)
        return createdUser
    } catch (err) {
        throw err
    }
}
function updateUsers() {}
function deleteUsers() {}

module.exports = {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
}
