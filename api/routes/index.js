const router = require("express").Router()
const products = require("./products.js")
// const productsRoute = require("./products") <--- Ejemplo de como debería ir
// Routes
// router.use("/productos", productsRoute) <--- Ejemplo de como debería ir
const listProducts = require("../routes/listProducts")
const ProductsDetails = require("./ProductsDetails")
router.use("/listProducts", listProducts)
router.use("/ProductsDetails", ProductsDetails)

router.use("/products", products)
module.exports = router
