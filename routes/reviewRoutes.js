const router = require('express').Router();
const handler = require('./../controllers/reviewController');

router.get('/', handler.getAllReviews);
router.post('/', handler.addReview);
router
  .route('/:id')
  .get(handler.getReview)
  .patch(handler.updateReview)
  .delete(handler.deleteReview);

module.exports = router;
