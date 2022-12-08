const router = require("express").Router()
const productsRoute = require("./productsRoute.js")

// Routes
// router.use("/productos", productsRoute) <--- Ejemplo de como debería ir
router.use("/product", productsRoute)

module.exports = router
