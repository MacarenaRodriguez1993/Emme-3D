const {
    getCategories,
    deleteCategory,
} = require("../controllers/categoryController")

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

async function deleteCategories(id) {
    try {
        const updatedCategory = await deleteCategory(id)
        return updatedCategory
    } catch (error) {
        throw error
    }
}

module.exports = {
    getAllCategories,
    createCategories,
    updateCategories,
    deleteCategories,
}
