const { createNewProduct } = require("../controllers/productController")
// PRODUCTS
function getAllProducts() {}
function getProductById(id) {}
function getProductByQuery() {}
async function createProduct(product) {
    try {
        const createdProduct = await createNewProduct(product)
        return createdProduct
    } catch (err) {
        throw err
    }
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
