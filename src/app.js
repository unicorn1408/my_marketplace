const knex = require('knex');
const knexfile = require('../db/knexfile')
const {Model} = require('objection')
const {heartbeatCheck} = require('../db/heartbeatCheck')

const Koa = require('koa');

const app = new Koa();

const koaBody = require('koa-body');
const router = require('./router/router');

app.use(koaBody());
app.use(router.routes());
app.use(router.allowedMethods());

const db = knex(knexfile.development);
Model.knex(db);
heartbeatCheck(db);

app.listen(3001, () => {
  console.log('server started');
});
