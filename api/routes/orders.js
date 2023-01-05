const router = require("express").Router()
const {
    createOrders,
    getAllOrders,
    getUsersOrders,
    updateOrders,
} = require("../middleware/middlewareOrders")

// Post crear nueva orden
router.post("/", async (req, res) => {
    const order = req.body
    try {
        const newOrder = await createOrders(order)
        res.status(200).json(newOrder)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

// Get lista todas las ordenes
router.get("/", async (req, res) => {
    try {
        const orders = await getAllOrders()
        res.status(200).json(orders)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

// Get lista de ordenes del usuario actual
router.get("/:id", async (req, res) => {
    const { id } = req.params

    try {
        const orders = await getUsersOrders(id)
        res.status(200).json(orders)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

// Put editar ordenes (solo admin!)
router.put("/:id", async (req, res) => {
    const { id } = req.params
    const order = req.body

    try {
        const updatedOrder = await updateOrders(id, order)
        res.status(203).json(updatedOrder)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = router
