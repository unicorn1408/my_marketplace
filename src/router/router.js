const Router = require('koa-router');

const router = new Router();

const knex = require('knex');
const knexfile = require('../../db/knexfile')
const db = knex(knexfile.development);

router.get('/hello', async (ctx) => {
  ctx.body = 'world!';
});

router.get('/healthcheck', async (ctx) => {
  const healthcheck = {
    uptime: process.uptime(),
    processtime: process.hrtime(),
    message: 'OK',
    timestamp: new Date()
  };

  try {
    ctx.body = healthcheck;
  } catch (error) {
    healthcheck.message = error;
    ctx.throw(503);
  }
});
module.exports = router;
