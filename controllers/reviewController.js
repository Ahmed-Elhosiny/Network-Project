const Review = require('./../models/reviewModel');

exports.addReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);
    res.status(200).json(review);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};
exports.getAllReviews = async (req, res) => {
  try {
    const Reviews = await Review.find();
    res.status(200).json(Reviews);
  } catch (err) {
    res.json(err);
  }
};
exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!review) {
      res
        .status(404)
        .json({ msg: 'Review not found' });
    }
    res.status(200).json(review);
  } catch (err) {
    res.json(err);
  }
};
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(
      req.params.id
    );
    if (!review) {
      res
        .status(404)
        .json({ msg: 'Review not found' });
    }

    res.status(204).json({});
  } catch (err) {
    res.json(err);
  }
};
exports.getReview = async (req, res) => {
  try {
    const review = await Review.find({
      _id: req.params.id,
    });
    if (!review) {
      res
        .status(404)
        .json({ msg: 'Review not found' });
    }
    res.status(200).json(review);
  } catch (err) {
    res.json(err);
  }
};
