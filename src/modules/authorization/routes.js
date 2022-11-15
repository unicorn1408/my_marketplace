const Router = require('koa-router');
const passport = require('koa-passport');

require('./passport');

const { makeContoller } = require('../../libs/makeController');

const { updateTokens } = require('./controllers/updateTokens');
const { loginUser } = require('./controllers/loginUser');

const authRouter = new Router();

authRouter.use(passport.initialize());

authRouter.post('/login', makeContoller(loginUser));

authRouter.get(
  '/tokens',
  passport.authenticate('refreshJWT', { session: false }),
  makeContoller(updateTokens),
);

module.exports = { authRouter };
