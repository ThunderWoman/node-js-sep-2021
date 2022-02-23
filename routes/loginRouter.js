const router = require('express').Router();

const { loginController } = require('../controllers');
const { userMiddleware } = require('../middleware');

router.get('/', loginController.getCreateUserForm);
router.post('/', userMiddleware.isUserDataValid, loginController.createUser);

module.exports = router;