const router = require("express").Router()
const {getAllReviews, reviewsById, addReview } = require("../middleware/middlewareReviews")




router.get("/", async (req, res) => {
    try {
        const reviews = await getAllReviews()
        res.status(200).json(reviews)
    } catch (err) {
        res.status(404).send(err.message)
    }
})

router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        const reviewsId = await reviewsById(id)
        res.status(200).json(reviewsId)
    } catch (err) {
        res.status(404).send(err.message)
    }
})


router.post("/", async (req, res) => {
    const reviews = req.body
    try {
        const newReview = await addReview(reviews)
        res.status(201).json(newReview)
    } catch (err) {
        res.status(404).send(err.message)
    }
})

module.exports = router