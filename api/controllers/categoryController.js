const Category = require("../models/Category")

async function getCategories() {
    try {
        const categories = await Category.find()
        return categories
    } catch (error) {
        throw error
    }
}

module.exports = {
    getCategories,
}
