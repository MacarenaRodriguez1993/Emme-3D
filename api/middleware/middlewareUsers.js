const {
    createUser,
    getUsers,
    deletedUser,
} = require("../controllers/userController")

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
async function deleteUsers(id) {
    try {
        const deleted = await deletedUser(id)
        return deleted
    } catch (err) {
        throw err
    }
}

module.exports = {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
}
