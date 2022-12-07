const { UUID } = require("bson")
const mongoose = require("mongoose")

/*
 * Un EstadoDeOrde es cualquiera de los estados que pueda tener un pedido (Ej: Pendiente, En revisión, Enviado, Recibido, etc).
 */

const OrderStateSchema = new mongoose.Schema(
    {
        // Id del estado
        id: {
            type: UUID,
            required: true,
            unique: true,
        },

        // Nombre del estado
        name: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("OrderState", OrderStateSchema)
