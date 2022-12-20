const router = require("express").Router()
const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
} = require("../middleware/middlewareUsers.js")

// Get lista todas los usuarios (Admin)
router.get("/", async (req, res) => {
    try {
        const users = await getAllUsers()
        res.status(200).json(users)
    } catch (err) {
        res.status(404).send(err.message)
    }
})
// Get detalles del usuario /:id

// Post crear nueva usuario

// Put editar usuario (Admin todos, usuario solo a si mismo)

// Delete usuario (borrado lógico de usuario)

module.exports = router
