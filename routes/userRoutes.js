const router = require('express').Router();
const handler = require('./../controllers/userController');

router.get('/', handler.getAllUsers);

router.post('/login', handler.login);
router.post('/signup', handler.addUser);
router
  .route('/:id')
  .get(handler.getUser)
  .patch(handler.updateUser)
  .delete(handler.deleteUser);

module.exports = router;
