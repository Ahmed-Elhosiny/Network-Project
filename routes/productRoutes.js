const router = require('express').Router();
const handler = require('./../controllers/productController');

router.get('/', handler.getAllProducts);
router.post('/', handler.addProduct);
router
  .route('/:id')
  .get(handler.getProduct)
  .patch(handler.updateProduct)
  .delete(handler.deleteProduct);

module.exports = router;
