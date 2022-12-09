const router = require("express").Router()
const {
    getAllProducts,
    getProductById,
    getProductByQuery,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../middleware/middlewareProducts")
const product = require("../models/Product.js")

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

// Put editar producto existente
router.put("/:id", async (req, res) => {
    //edita un producto
    /*
    objeto producto
    {
        name: vasito3d,
        price: 230,
        stock: 100,
        description: "un vaso re piola",
        categories: [ObjectId],
        reviews: [ObjectId],
        img: [string],
    }
    solo recibira las propiedades que quiera cambiar
    el id es obligatorio para realizar la busqueda, asi se sabe que producto hay que cambiar
    */
    const { id } = req.params
    const objectProduct = req.body
    delete objectProduct.id
    await product.updateOne({ id: id }, objectProduct)
})

// Delete borrar producto (lógico)

module.exports = router