const { getUsers } = require("../controllers/userController")
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
function createUsers() {}
function updateUsers() {}
function deleteUsers() {}

module.exports = {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
}
