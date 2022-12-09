const { productById } = require("../controllers/productController")

// PRODUCTS
function getAllProducts() {}

async function getProductById(id) {
    try {
        const product = await productById(id)
        // TO-DO: Faltará añadirle las categorías y reseñas
        return product
    } catch (error) {
        throw error
    }
}

function getProductByQuery() {}
function createProduct() {}
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
