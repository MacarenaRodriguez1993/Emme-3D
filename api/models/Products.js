const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        // Id del producto
        id: {
            type: UUID,
            required: true,
            unique: true,
        },

        // Nombre del producto
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

        // Categoria del producto
        category: [
            {
                category_id: mongoose.Types.ObjectId,
            },
        ],

        // Reseñas del producto
        reviews: [
            {
                review_id: mongoose.Types.ObjectId,
            },
        ],

        // URL de la imagen del producto
        img: {
            type: String,
            required: true,
        },

        // "Flag" para el borrado lógico
        deleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Product", ProductSchema)
