const mongoose = require("mongoose")

/*
 * Una Order es cualquier pedido hecho por un usuario.
 * Contiene una lista de detalles de pedido, un usuario y un estado.
 */

const OrderSchema = new mongoose.Schema(
    {
        // Usuario al que pertenece la orden
        user_id: {
            type: mongoose.Types.ObjectId,
            required: true,
        },

        // Detetalles de la orden
        products: [
            {
                productId: {
                    type: String,
                },
                quantity: {
                    type: Number,
                    default: 1,
                },
            },
        ],

        // Estado del pedido
        state: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Order", OrderSchema)
