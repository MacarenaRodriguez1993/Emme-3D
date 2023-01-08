const { getReviews, reviewId, createReview } = require("../controllers/reviewController")



async function getAllReviews() {
    try {
        const reviews = await getReviews()
        return reviews
    } catch (err) {
        throw err
    }
}


async function reviewsById(id) {
    try {
        const review = await reviewId(id)
        return review
    } catch (err) {
        throw err
    }
}

async function addReview (reviews) {
    try {
        const createReviews = await createReview(reviews)
        return createReviews
    } catch (err) {
        throw err
    }
}


module.exports = {
    getAllReviews,
    reviewsById,
    addReview
}