const { UserRepository } = require('../user.repository');
const { getJWT } = require('../../../libs/getJWT');

const createUser = async (ctx) => {
  const newUserData = ctx.request.body;
  const newUser = await UserRepository.create(newUserData);

  const tokenPayload = {
    id: newUser.id,
    email: newUser.email,
  };
  const token = getJWT(tokenPayload);

  return ctx.set('Authorization', `Bearer ${token}`);
};

module.exports = { createUser };
