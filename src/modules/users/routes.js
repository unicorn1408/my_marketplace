// new koa router exported to index
const Router = require('koa-router');
const passport = require('koa-passport');

require('../authorization/passport');

const { makeContoller } = require('../../libs/makeController');
const { createUser } = require('./controllers/createUser');
const { userProfile } = require('./controllers/userProfile');

const userRouter = new Router();

userRouter.use(passport.initialize());

userRouter.post('/registration', makeContoller(createUser));
userRouter.get(
  '/me',
  passport.authenticate('accessJWT', { session: false }),
  makeContoller(userProfile),
);

module.exports = { userRouter };
