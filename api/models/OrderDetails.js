const mongoose = require("mongoose")

/*
 * Unos DetallesDeOrden es la información sobre un producto que se va a comprar (Que producto, cuántas unidades, etc).
 * Contiene el producto y la orden a los que pertenece.
 */

const OrderDetailsSchema = new mongoose.Schema(
    {
        // Id del producto que se compra
        product_id: {
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
        order_id: {
            type: mongoose.Types.ObjectId,
            required: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("OrderDetails", OrderDetailsSchema)
