const {
    getImage,
    createImg,
    imageInact,
} = require("../controllers/carouselController")
async function getImageCarousel() {
    try {
        const imageCarousel = await getImage()
        return imageCarousel
    } catch (err) {
        throw err
    }
}

async function crearImageCarousel(image) {
    try {
        const crearImage = await createImg(image)
        return crearImage
    } catch (err) {
        throw err
    }
}
async function deleteImageCarousel(id) {
    try {
        const delet = await imageInact(id)
        return delet
    } catch (err) {
        throw err
    }
}
module.exports = {
    getImageCarousel,
    crearImageCarousel,
    deleteImageCarousel,
}
