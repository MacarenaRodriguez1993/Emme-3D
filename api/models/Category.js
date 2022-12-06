const { UUID } = require("bson")
const mongoose = require("mongoose")

const CategorySchema = new mongoose.Schema(
    {
        // Id de la categoria
        id: {
            type: UUID,
            required: true,
            unique: true,
        },

        // Nombre de la categoria
        name: {
            type: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Category", CategorySchema)
