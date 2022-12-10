const { newProduct } = require("../controllers/productController")
// PRODUCTS
function getAllProducts() {}
function getProductById(id) {}
function getProductByQuery() {}
function createProduct(product) {
    return newProduct(product)
}
function updateProduct() {}

module.exports = {
    getAllProducts,
    getProductById,
    getProductByQuery,
    createProduct,
    updateProduct,
}
