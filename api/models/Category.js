const { UUID } = require("bson")
const mongoose = require("mongoose")

/*
 * Una Categoria es cualquiera de las categorías en las que se pueden clasificar los productos.
 */

const CategorySchema = new mongoose.Schema(
    {
        // Nombre de la categoria
        name: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Category", CategorySchema)
