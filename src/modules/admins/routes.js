// new koa router exported to index
const Router = require('koa-router');
const { makeContoller } = require('../../libs/makeController');
const { createAdmin } = require('./controllers/createAdmin');

const adminRouter = new Router();

adminRouter.post('/registration', makeContoller(createAdmin));

module.exports = { adminRouter };
