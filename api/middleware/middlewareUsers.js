const { createUser } = require("../controllers/userController")
// USERS
function getAllUsers() {}
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
