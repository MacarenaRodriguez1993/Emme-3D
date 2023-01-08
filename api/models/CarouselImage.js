const mongoose = require("mongoose")

const CarouselSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Carousel", CarouselSchema)
