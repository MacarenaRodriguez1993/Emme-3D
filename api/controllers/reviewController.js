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
async function reviewId(id) {
    console.log(id)
    try {
        
        const reviews = await Review.aggregate([
            {
                $match: {
                    product_id: mongoose.Types.ObjectId(id)
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "useruid",
                    foreignField: "uid",
                    as: "userData"
                }
            }
        ]);
            return reviews;
    
    } catch (err) {
        throw err;
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
