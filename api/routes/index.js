const router = require("express").Router()

// Routes
const products = require("./products.js")
const users = require("./users")
const orders = require("./orders")
const categories = require("./categories")

// Routes
router.use("/products", products) // Todo lo de productos (lista de productos, editar, borrar, crear)
router.use("/users", users) // Todo lo de usuarios (lista de usuarios, editar, borrar, login)
router.use("/orders", orders) // Ver lista de todas las ordenes (lista de ordenes, crear [compras], Admin: puede cambiar estado de envio)
router.use("/categories", categories) // Ver lista de categorias (lista de categorías, Admin: crear, editar)

module.exports = router
