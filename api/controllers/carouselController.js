const Carousel = require("../models/CarouselImage")

async function getImage() {
    try {
        const image = await Carousel.find()
        return image
    } catch (err) {
        throw err
    }
}
async function createImg(image) {
    try {
        const newImage = await Carousel.create(image)
        return newImage
    } catch (err) {
        throw err
    }
}
async function imageInact(id) {
    console.log(id)
    try {
        const inactivo = await Carousel.deleteOne({
            _id: id,
        })
        return inactivo
    } catch (err) {
        throw err
    }
}
module.exports = {
    getImage,
    createImg,
    imageInact,
}
