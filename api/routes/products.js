const router = require("express").Router()
const {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProducByQuery,
} = require("../middleware/middlewareProducts")

// Get producto por query
router.get("/", async (req, res, next) => {
    const { name } = req.query
    try {
        if (name) {
            const product = await getProducByQuery(name)
            res.status(200).json(product)
        } else {
            next()
        }
    } catch (err) {
        res.status(404).send(err.message)
    }
})

// Get lista todas los productos (Admin)
router.get("/", async (req, res) => {
    try {
        const productos = await getAllProducts()
        res.status(200).json(productos)
    } catch (err) {
        res.status(402).send(err.message)
    }
    // }
})

// Get producto por param id (Detalles producto)
router.get("/:id", async (req, res) => {
    const { id } = req.params

    try {
        const product = await getProductById(id)
        res.status(200).json(product)
    } catch (err) {
        res.status(404).send(err.message)
    }
})

// Post crear nuevo producto
router.post("/", async (req, res) => {
    const product = req.body
    try {
        const newProduct = await createProduct(product)
        res.status(201).json(newProduct)
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
router.delete("/:id", async (req, res) => {
    //borrado logico
    let { id } = req.params
    let response = await deleteProduct(id)
    res.status(200).send(response.acknowledged)
})

module.exports = router
