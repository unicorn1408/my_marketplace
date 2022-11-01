// new koa router exported to index
const Router = require('koa-router');
const passport = require('koa-passport');

require('../authorization/passport');

const { makeContoller } = require('../../libs/makeController');
const { createUser } = require('./controllers/createUser');
const { loginUser } = require('./controllers/loginUser');

const userRouter = new Router();

userRouter.use(passport.initialize());

userRouter.post('/registration', makeContoller(createUser));
userRouter.post('/login', makeContoller(loginUser));
userRouter.get(
  '/protected',
  passport.authenticate('jwt', { session: false }),
  async (ctx) => {
    ctx.body = 'authorization test';
  },
);

module.exports = { userRouter };
