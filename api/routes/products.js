const router = require("express").Router()
const {
    getAllProducts,
    getProductById,
    getProductByQuery,
    createProduct,
    updateProduct,
    deleteProduct,
    producByQuery,
} = require("../middleware/middlewareProducts")

// Get lista todas los productos (Admin)
router.get("/", async (req, res) => {
    let { name } = req.query
    //console.log(typeof name) es un string
    if (name) {
        let getProduct = await producByQuery(name)
        res.status(200).send(getProduct)
    } else {
        try {
            res.status(200).json(listProducts())
        } catch (err) {
            res.status(402).send(err.message)
        }
    }
})

// Get lista todos los productos (delete=false)

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

// Get producto por query
router.get("/", async (req, res) => {
    const { name } = req.query
    try {
        if (name) {
            res.status(200).json(producByQuery(name))
        }
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
