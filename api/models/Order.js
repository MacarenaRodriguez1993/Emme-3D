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
                productName: {
                    type: String,
                },

                productImage: {
                    type: String,
                },

                amount: {
                    type: Number,
                    default: 1,
                },

                productTotal: {
                    type: Number,
                },
            },
        ],

        total: {
            type: Number,
            required: true,
        },

        // Estado del pedido
        state: {
            type: String,
            default: "Recibida",
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Order", OrderSchema)
