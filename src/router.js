const Router = require('koa-router');

const router = new Router();

const { userRouter } = require('./modules/users/index');

router.use('/users', userRouter.routes());

router.get('/healthcheck', async (ctx) => {
  const healthcheck = {
    uptime: process.uptime(),
    processtime: process.hrtime(),
    message: 'OK',
    timestamp: new Date(),
  };
  ctx.body = healthcheck;
});

module.exports = { router };
