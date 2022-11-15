const { authService } = require('../authService');

const updateTokens = async (ctx) => {
  const refreshToken = ctx.request.header.authorization;
  const user = await authService.getUserByToken(refreshToken);
  const newTokens = await authService.getTokens(user);

  return newTokens;
};

module.exports = { updateTokens };
