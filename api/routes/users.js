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
router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const userId = await getUsersById(id)
        res.status(200).json(userId)
    } catch (err) {
        res.status(404).send(err.message)
    }
})
// Post crear nueva usuario

// Put editar usuario (Admin todos, usuario solo a si mismo)

// Delete usuario (borrado lógico de usuario)

module.exports = router
