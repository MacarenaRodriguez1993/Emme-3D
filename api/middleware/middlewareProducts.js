const { newProduct, productById } = require("../controllers/productController")

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

function createProduct(product) {
    return newProduct(product)
}
function updateProduct() {}

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
}
