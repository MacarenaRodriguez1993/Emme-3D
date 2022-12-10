const {
    getCategories,
    createCategory,
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

async function createCategories(category) {
    try {
        const createdCategory = await createCategory(category)
        return createdCategory
    } catch (error) {
        throw error
    }
}

function updateCategories() {}
function deleteCategories() {}

module.exports = {
    getAllCategories,
    createCategories,
    updateCategories,
    deleteCategories,
}
