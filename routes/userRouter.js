const userRouter = require('express').Router();

const userController = require('../controllers');

userRouter.get('/', userController.getAll);
userRouter.get('/:id', userController.getByParams);

module.exports = userRouter;