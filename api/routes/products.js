const router = require("express").Router()
const {
    getAllProducts,
    getProductById,
    getProductByQuery,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../middleware/middlewareProducts")
const Product = require("../models/Product.js")

// Get lista todas los productos (Admin)
router.get("/", async (req, res) => {
    try {
        res.status(200).json(listProducts())
    } catch (err) {
        res.status(402).send(err.message)
    }
})

// Get lista todos los productos (delete=false)

// Get producto por param id (Detalles producto)
router.get("/:id", async (req, res) => {
    const { id } = req.params.id
    try {
        res.status(200).json(productId(id))
    } catch (err) {
        res.status(404).send(err.message)
    }
})

// Get producto por query
router.get("/", async (req, res) => {
    const { name } = req.query
    try {
        if (name) {
            res.status(200).json(ProducByQuery(name))
        }
    } catch (err) {
        res.status(404).send(err.message)
    }
})

// Post crear nuevo producto
router.post("/", async (req, res) => {
    try {
        const newProduct = await createProduct(req.body)
        res.status(201).send(newProduct)
    } catch (err) {
        res.status(404).send(err.message)
    }
})

// Put editar producto existente
router.put("/:id", async (req, res) => {
    let { id } = req.params
    let body = req.body
    let notification = await updateProduct(id, body)
    res.status(200).send(notification)
})

// Delete borrar producto (lógico)

module.exports = router
