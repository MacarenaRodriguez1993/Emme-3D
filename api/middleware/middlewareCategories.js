const {
    getCategories,
    updateCategory,
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

async function updateCategories(category) {
    try {
        const updatedCategory = await updateCategory(category)
        return updatedCategory
    } catch (error) {
        throw error
    }
}

function deleteCategories() {}

module.exports = {
    getAllCategories,
    createCategories,
    updateCategories,
    deleteCategories,
}
