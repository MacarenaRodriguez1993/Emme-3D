const router = require("express").Router()
// const productsRoute = require("./products") <--- Ejemplo de como debería ir
// Routes
// router.use("/productos", productsRoute) <--- Ejemplo de como debería ir
const listProducts = require("../routes/listProducts")
const ProductsDetails = require("./ProductsDetails")
router.use("/listProducts", listProducts)
router.use("/ProductsDetails", ProductsDetails)

module.exports = router
