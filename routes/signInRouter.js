const signInRouter = require('express').Router();

const signInController = require('../controllers');
const isEmailExist = require('../middleware');

signInRouter.get('/', signInController.renderSignIn);
signInRouter.post('/', isEmailExist, signInController.renderUser);

module.exports = signInRouter;