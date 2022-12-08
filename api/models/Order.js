const { UUID } = require("bson")
const mongoose = require("mongoose")

/*
 * Una Order es cualquier pedido hecho por un usuario.
 * Contiene una lista de detalles de pedido, un usuario y un estado.
 */

const OrderSchema = new mongoose.Schema(
    {
        // Detetalles de la orden
        order_details_id: {
            type: mongoose.Types.ObjectId,
            required: true,
            unique: true, // Creo que debería ser único por haber solo un pedido por cada detalles de pedido?
        },

        // Usuario al que pertenece la orden
        user_id: {
            type: mongoose.Types.ObjectId,
            required: true,
        },

        // Estado del pedido
        state: {
            type: mongoose.Types.ObjectId,
            required: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Order", OrderSchema)
