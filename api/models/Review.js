const mongoose = require("mongoose")

/*
 * Una Reseña es cualquier valoración hecha por un usuario.
 * Contiene un producto valorado y un usuario que la escribe.
 */

const ReviewSchema = new mongoose.Schema(
    {
        // Id del producto que se valora
        product_id: {
            type: mongoose.Types.ObjectId,
            required: true,
        },

        // Usuario que crea la valoración
        user_id: {
            type: mongoose.Types.ObjectId,
            required: true,
        },

        // Texto de la valoración
        review: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Review", ReviewSchema)
