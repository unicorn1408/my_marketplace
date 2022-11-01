const Boom = require('boom');

function makeContoller(controller) {
  return async (ctx) => {
    try {
      const result = await controller(ctx);
      ctx.body = result;
    } catch (error) {
      let errorData = {};
      if (!(error instanceof Boom)) {
        errorData = Boom.boomify(error);
      }
      errorData = error.output.payload;
      ctx.status = errorData.statusCode;
      ctx.body = errorData;
    }
  };
}

module.exports = { makeContoller };
