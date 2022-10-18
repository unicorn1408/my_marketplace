const knex = require('knex');
const { Model } = require('objection');
const Koa = require('koa');
const koaBody = require('koa-body');
const knexfile = require('../db/knexfile');
const { heartbeatCheck } = require('../db/heartbeatCheck');
const {router} = require('./router');

const app = new Koa();

const db = knex(knexfile.development);
Model.knex(db);
heartbeatCheck(db);

app.use(koaBody());
app.use(router.allowedMethods());
// class GeneralError extends Error{
//   constructor(httpCode, sentryCode, msg){

//   }
//   toJSON(){
//     return {
//       code:this.httpCode,
//       sentryCode,
//       message,
//       name: this.constructor.name
//     }
//   }
// }

// user=db.create()
// console.log()
// return {
//   createdSUer:user
// }

// function makeContoller(cntr){
//   return async (ctx)=>{
//     try{
//       const result=await cntl(ctx)
//       ctx.body=result
//     }catch(error){
//       if(!(error instanceof GeneralError)){
//         error=new InternalServerError(error)

//       }
//         const errorAsJson=error.toJSON()
//         ctx.statusCode=errorAsJson.code
//         ctx.body=errorAsJson

//     }
//   }

// }

// router.post('/users', makeContoller(postUserController))
// const result=db.query()
// if(!result){
//   throw new NotFoundError("bla")
// }

// class NotFoundError extends GeneralError{
//   constructor(msg){
//     super(404,null, "Not found" )
//   }
// }

app.use(router.routes());

app.listen(3001, () => {
  console.log('server started');
});
