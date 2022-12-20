const { usersId } = require("../controllers/userController")
// USERS
function getAllUsers() {}
async function getUsersById(id) {
    try {
        const user = await usersId(id)
        return user
    } catch (err) {
        throw err
    }
}
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
