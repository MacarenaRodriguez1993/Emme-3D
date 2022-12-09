const { getCategories } = require("../controllers/categoryController")

// CATEGORIES
async function getAllCategories() {
    try {
        const categories = await getCategories()
        return categories
    } catch (error) {
        throw error
    }
}

function createCategories() {}
function updateCategories() {}
function deleteCategories() {}

module.exports = {
    getAllCategories,
    createCategories,
    updateCategories,
    deleteCategories,
}
