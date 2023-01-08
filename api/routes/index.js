const router = require("express").Router()

// Routes 
// router.use("/productos", productsRoute) <--- Ejemplo de como debería ir
const products = require("./products.js")
const users = require("./users")
const orders = require("./orders")
const categories = require("./categories")
const reviews = require("./reviews")
const email = require("./email")
const mercadopago = require("./mercadopago")
const carousel = require("./carousel")
// const productsRoute = require("./products") <--- Ejemplo de como debería ir

// Routes
// router.use("/productos", productsRoute) <--- Ejemplo de como debería ir
router.use("/products", products) // Todo lo de productos (lista de productos, editar, borrar, crear)
router.use("/users", users) // Todo lo de usuarios (lista de usuarios, editar, borrar, login)
router.use("/orders", orders) // Ver lista de todas las ordenes (lista de ordenes, crear [compras], Admin: puede cambiar estado de envio)
router.use("/categories", categories) // Ver lista de categorias (lista de categorías, Admin: crear, editar)
router.use("/email", email) // plantilla para envio de notificaciones por mail
router.use("/mercadopago", mercadopago)
router.use("/carousel", carousel)
router.use("/reviews", reviews)

module.exports = router
