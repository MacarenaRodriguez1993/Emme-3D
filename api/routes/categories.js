const router = require("express").Router()
const {
    getAllCategories,
    createCategories,
    updateCategories,
    deleteCategories,
} = require("../middleware/middlewareCategories")

// Get lista todas las categorias
router.get("/", async (req, res) => {
    try {
        const categories = await getAllCategories()
        res.status(200).json(categories)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

// Post crear nueva categoría
router.post("/", async (req, res) => {
    const category = req.body
    try {
        const newCategory = await createCategories(category)
        res.status(200).json(newCategory)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

// Put editar categoría existente

// Delete borrar categoría

module.exports = router
