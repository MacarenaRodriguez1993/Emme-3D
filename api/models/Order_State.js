const { UUID } = require("bson")
const mongoose = require("mongoose")

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
