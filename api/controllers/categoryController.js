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


async function updateCategory(category) {
    try {
        const updatedCategory = await Category.updateOne(
            { _id: category._id },
            {
                $set: { name: category.name },
                $currentDate: { lastModified: true },
            }
        )

        // Si no se ha modificado nada asumimos que la categoría no existe
        if (!updatedCategory.modifiedCount)
            throw new Error(
                `No existe ninguna categoría con id "${category._id}".`
            )
        return `Categoría renombrada a ${category.name}.`
    } catch (error) {
        throw error
    }

async function createCategory(category) {
    try {
        const createdCategory = await Category.create(category)
        return createdCategory
    } catch (error) {
        // E11000 es el código de error cuando el elemento ya existe (duplicado)
        if (error.message.includes("E11000"))
            error.message = `Ya existe una categoría con nombre "${category.name}".`
        throw error
    }
}

module.exports = {
    getCategories,
    updateCategory,
    createCategory,

}
