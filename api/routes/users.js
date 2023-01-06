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
router.put("/:uid", async (req, res) => {
    const { uid } = req.params
    const user = req.body
    try {
        const updateUser = await updateUsers(uid, user)
        res.status(200).json(updateUser)
    } catch (err) {
        res.status(404).send(err.message)
    }
})
// Delete usuario (borrado lógico de usuario)
router.delete("/:uid", async (req, res) => {
    const { uid } = req.params
    try {
        const deleted = await deleteUsers(uid)
        res.status(200).json("se hizo el borrado logico: USUARIO INACTIVO")
    } catch (err) {
        res.status(404).json(err.message)
    }
})

module.exports = router
