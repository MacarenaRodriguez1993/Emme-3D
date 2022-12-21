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
router.put("/:id", async (req, res) => {
    const { id } = req.params
    const user = req.body
    try {
        const updateUser = await updateUsers(id, user)
        res.status(200).json(updateUser)
    } catch (err) {
        res.status(404).send(err.message)
    }
})
// Delete usuario (borrado lógico de usuario)
router.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const deleted = await deleteUsers(id)
        res.status(200).json("se hizo el borrado logico: USUARIO INACTIVO")
    } catch (err) {
        res.status(404).json(err.message)
    }
})

module.exports = router
