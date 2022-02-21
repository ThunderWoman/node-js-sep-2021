const loginRouter = require('express').Router();

const loginController = require('../controllers');
const isAllData = require('../middleware');

loginRouter.get('/', loginController.renderPage);
loginRouter.post('/', isAllData, loginController.loginUser);

module.exports = loginRouter;