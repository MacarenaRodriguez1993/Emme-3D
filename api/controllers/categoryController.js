const Category = require("../models/Category")

async function getCategories() {
    try {
        const categories = await Category.find()
        // Si no hay categorías mandamos error
        if (categories.length < 1)
            throw new Error(
                "Vaya, parece que no hay categorías en la base de datos."
            )
        return categories
    } catch (error) {
        throw error
    }
}

module.exports = {
    getCategories,
}
