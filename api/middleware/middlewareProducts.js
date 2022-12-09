const { newProduct } = require("../controllers/productController")
// PRODUCTS
function getAllProducts() {}
function getProductById(id) {}
function getProductByQuery() {}
function createProduct(product) {
    return newProduct(product)
}
function updateProduct() {}
function deleteProduct() {}

module.exports = {
    getAllProducts,
    getProductById,
    getProductByQuery,
    createProduct,
    updateProduct,
    deleteProduct,
}
