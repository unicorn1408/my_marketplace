// new koa router exported to index
const Router = require('koa-router');
const { makeContoller } = require('../../libs/makeController');
const { createShop } = require('./controllers/createShop');

const shopRouter = new Router();

shopRouter.post('/registration', makeContoller(createShop));

module.exports = { shopRouter };
