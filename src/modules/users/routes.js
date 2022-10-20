// new koa router exported to index
const Router = require('koa-router');
const {makeContoller} = require('../../libs/makeController')
const {createUser} = require('./controllers/createUser')
const userRouter = new Router();

userRouter.post('/registration', makeContoller(createUser));

module.exports = {userRouter}