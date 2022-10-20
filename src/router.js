const Router = require('koa-router');

const router = new Router();

const {userRouter} = require('./modules/users/routes')

// const { makeContoller } = require('./libs/makeController');

// const helloTest = async (ctx) => {
//   return ctx.body = 'world!';
// };
// router.get('/hello', makeContoller(helloTest));
router.use('/users', userRouter.routes())

router.get('/healthcheck', async (ctx) => {
  const healthcheck = {
    uptime: process.uptime(),
    processtime: process.hrtime(),
    message: 'OK',
    timestamp: new Date(),
  };
  ctx.body = healthcheck;
});
module.exports = {router};
