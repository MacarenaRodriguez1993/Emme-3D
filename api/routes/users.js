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
router.post("/", async (req, res) => {
    const user = req.body
    try {
        const newUser = await createUsers(user)
        res.status(201).json(newUser)
    } catch (err) {
        res.status(404).send(err.message)
    }
})
// Put editar usuario (Admin todos, usuario solo a si mismo)

// Delete usuario (borrado lógico de usuario)

module.exports = router
