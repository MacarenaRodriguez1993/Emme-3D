const router = require("express").Router()
const product = require("../models/Product.js")

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

module.exports = router
