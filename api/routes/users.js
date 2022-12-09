const router = require("express").Router()
const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
} = require("../middleware/middlewareUsers.js")

// Get lista todas los usuarios (Admin)

// Get detalles del usuario /:id

// Post crear nueva usuario

// Put editar usuario (Admin todos, usuario solo a si mismo)

// Delete usuario (borrado lógico de usuario)

module.exports = router
