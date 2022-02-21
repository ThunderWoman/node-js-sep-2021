const routes = require('express').Router();

const userRouter = require("./userRouter");
const loginRouter = require('./loginRouter');
const signInRouter = require('./signInRouter')


routes.use('/users', userRouter)
routes.use('/login', loginRouter)
routes.use('/signIn', signInRouter)

routes.use((req, res) => {
    res.render('notFound');
})

module.exports = routes;