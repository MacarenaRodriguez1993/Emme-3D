const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        // Nombre de la categoria
        name: {
            type: String,
            required: true,
            unique: true,
        },

        // Precio por unidad del producto
        price: {
            type: Number,
            required: true,
        },

        // Cantidad de unidades del producto (1 por defecto)
        stock: {
            type: Number,
            required: true,
            default: 1,
        },

        // Descripción del producto
        description: {
            type: String,
            required: true,
        },

        // URL de la imagen del producto
        img: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Product", ProductSchema)
