const userRouter = require('express').Router();

const { userController } = require('../controllers');
const { userMiddleware } = require('../middleware');

userRouter.get('/', userController.getAllUsers);

userRouter.get('/:userId',
    userMiddleware.isUserIdValid,
    userMiddleware.isUserExist,
    userController.getUserById
);
userRouter.post('/:userId',
    userMiddleware.isUserIdValid,
    userController.deleteUserById);

module.exports = userRouter;