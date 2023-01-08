const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId
const Review = require("../models/Review")

// Obtiene todas las reseñas
async function getReviews() {
    try {
        const reviews = await Review.find()
        if (reviews.length < 1) throw new Error(`no hay reviews.`)
        return reviews
    } catch (err) {
        throw err
    }
}

// Obtiene una reseña específica
async function reviewId(productId) {
    try {
        const reviews = await Review.find({ product_id: ObjectId(productId) })
        if (!reviews || reviews.length === 0) {
            throw new Error(`No reviews found for product with ID ${productId}`)
        }

        return reviews
    } catch (error) {
        console.error(error)
        return error.message
    }
}

// Añade una nueva reseña
async function createReview(reviews) {
    //const {user_id, product_id, review, rating} = reviews
    try {
        const newReview = await Review.create(reviews)
        return newReview
    } catch (err) {
        throw err
    }
}

module.exports = {
    getReviews,
    reviewId,
    createReview,
}
