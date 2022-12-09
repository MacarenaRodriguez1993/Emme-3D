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

module.exports = router
