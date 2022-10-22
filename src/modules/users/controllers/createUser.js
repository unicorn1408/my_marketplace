const { UserRepository } = require('../user.repository');

const createUser = async (ctx) => {
  const newUserData = ctx.request.body;

  const newUser = UserRepository.create(newUserData);

  return newUser;
};

module.exports = { createUser };
