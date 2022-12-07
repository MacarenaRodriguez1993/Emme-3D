const { UUID } = require("bson")
const mongoose = require("mongoose")
const OrderDetailsSchema = new mongoose.Schema(
    {
        // Id de la orden
        id: {
            type: UUID,
            required: true,
            unique: true,
        },

        // Id del producto que se compra
        id_producto: {
            type: mongoose.Types.ObjectId,
            required: true,
            unique: true,
        },

        // Cantidad del objeto que se compra
        quantity: {
            type: Number,
            required: true,
        },

        // Precio total de la orden
        price: {
            type: Number,
            required: true,
        },

        // Id de la orden a la que pertenece
        id_order: {
            type: mongoose.Types.ObjectId,
            required: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("OrderDetails", OrderDetailsSchema)
