const {
    createUser,
    getUsers,
    deletedUser,
    userUpdate,
    usersId,
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

async function getUsersById(uid) {
    try {
        const user = await usersId(uid)
        return user
    } catch (err) {
        throw err
    }
}

async function createUsers(user) {
    try {
        const createdUser = await createUser(user)
        return createdUser
    } catch (err) {
        throw err
    }
}

async function updateUsers(id, user) {
    try {
        const updateUser = await userUpdate(id, user)
        return updateUser
    } catch (err) {
        throw err
    }
}

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
