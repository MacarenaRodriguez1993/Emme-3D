const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId
const Review = require('../models/Review');


  // Obtiene todas las reseñas
  async function getReviews (req, res) {
    try {
      const reviews = await Review.find();
      return reviews
    } catch (err) {
      err
    }
  }

  // Obtiene una reseña específica
  async function reviewId (id) {
    try {
      const review = await Review.find({
        _id: ObjectId(id)
      }).clone
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
      err
    }
  }


module.exports = {
    getReviews,
    reviewId,
    createReview
};
