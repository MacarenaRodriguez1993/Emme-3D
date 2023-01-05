const router = require("express").Router()
const {
    getImageCarousel,
    crearImageCarousel,
    deleteImageCarousel,
} = require("../middleware/middlewareCarousel")
router.get("/", async (req, res) => {
    try {
        const imgCarousel = await getImageCarousel()
        res.status(200).json(imgCarousel)
    } catch (err) {
        res.status(404).send(err.message)
    }
})
router.post("/", async (req, res) => {
    const image = req.body
    try {
        const newImageCarousel = await crearImageCarousel(image)
        res.status(200).json(newImageCarousel)
    } catch (err) {
        res.status(404).send(err.message)
    }
})
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const del = await deleteImageCarousel(id)
        res.status(200).send(del)
    } catch (err) {
        res.status(404).send(err.message)
    }
})
module.exports = router
