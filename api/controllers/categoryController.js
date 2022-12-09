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

async function createCategory(category) {
    try {
        const createdCategory = await Category.create(category)
        return createdCategory
    } catch (error) {
        // E11000 es el código de error cuando el elemento ya existe (duplicado)
        if (error.message.includes("E11000"))
            error.message = `Ya existe una categoría con nombre "${category.name}"`
        throw error
    }
}

module.exports = {
    getCategories,
    createCategory,
}
