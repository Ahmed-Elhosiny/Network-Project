const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: [true, "Review can't be empty"],
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: 'Product',
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
  },
});

const Review = mongoose.model(
  'Review',
  reviewSchema
);
module.exports = Review;
