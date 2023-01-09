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
                    required: true,
                },

                productImage: [
                    {
                        type: String,
                        required: true,
                        minItems: 1,
                    },
                ],

                productPrice: {
                    type: Number,
                    required: true,
                },

                productAmount: {
                    type: Number,
                    default: 1,
                },

                productTotal: {
                    type: Number,
                    default: function () {
                        return this.productPrice * this.productAmount
                    },
                },
            },
        ],

        total: {
            type: Number,
            default: function () {
                let sum = 0
                this.products.map((p) => (sum += p.productTotal))
                return sum
            },
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
