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

// Put editar categoría existente

// Delete borrar categoría
router.delete("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const result = await deleteCategories(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

module.exports = router
