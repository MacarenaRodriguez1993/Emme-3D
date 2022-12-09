const router = require("express").Router()
const product = require("../models/Product.js")

router.delete("/:id", async (req, res) => {
    //borrado logico
    let { id } = req.params
    let logicDelete = await product.updateOne(
        { id: id }, //busqueda
        { deleted: true } //cambio
    )
    res.status(200).send(logicDelete.acknowledged)
})

module.exports = router
