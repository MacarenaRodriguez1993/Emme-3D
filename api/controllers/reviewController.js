const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId
const Review = require('../models/Review');


  // Obtiene todas las reseñas
  async function getReviews () {
    try {
      const reviews = await Review.find();
      if (reviews.length < 1)
      throw new Error(`no hay reviews.`)
      return reviews
    } catch (err) {
      throw err
    }
  }

  // Obtiene una reseña específica
  async function reviewId(id) {
    try {
      const review = await Review.find({
        product_id:id,
      })
      if (review.length < 1)
            throw new Error(`No existen reviews para este producto  "${id}".`)
      return review
    } catch (err) {
      err
    }
  }

  // Añade una nueva reseña
  async function createReview (reviews) {
    //const {user_id, product_id, review, rating} = reviews
    try {
      const newReview = await Review.create(reviews);
      return newReview
    } catch (err) {
     throw err
    }
  }


module.exports = {
    getReviews,
    reviewId,
    createReview
};
