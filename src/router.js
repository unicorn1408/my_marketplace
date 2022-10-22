const Router = require('koa-router');

const router = new Router();

const { userRouter } = require('./modules/users/index');
const { shopRouter } = require('./modules/shops/index');
const { adminRouter } = require('./modules/admins/index');

router.use('/users', userRouter.routes());
router.use('/shops', shopRouter.routes());
router.use('/admins', adminRouter.routes());

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
