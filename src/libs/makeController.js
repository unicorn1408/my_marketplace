const Boom = require('boom');

function makeContoller(controller) {
  return async (ctx) => {
    try {
      const result = await controller(ctx);
      ctx.body = result;
    } catch (error) {
      if (!(error instanceof Boom)) {
        error = Boom.boomify(error);
      }
      error = error.output.payload;
      ctx.status = error.statusCode;
      ctx.body = error;
    }
  };
}

module.exports = { makeContoller };
