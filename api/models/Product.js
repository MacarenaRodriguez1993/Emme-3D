const mongoose = require("mongoose")

/*
 * Un Producto es cualquier cosa que se pueda vender en la tienda (y no sea un servicio).
 * Puede contener varias categorías y valoraciones.
 */

const ProductSchema = new mongoose.Schema(
    {
        // Nombre del producto
        name: {
            type: String,
            required: true,
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
        categories_ids: [
            {
                category_id: mongoose.Types.ObjectId,
                required: true,
            },
        ],

        // Reseñas del producto
        reviews_ids: [
            {
                review_id: mongoose.Types.ObjectId,
            },
        ],

        // URL de la imagen del producto
        img: [
            {
                type: String,
                required: true,
                validate: (a = Array.isArray(a) && a.length > 0),
            },
        ],

        // "Flag" para el borrado lógico
        deleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Product", ProductSchema)
