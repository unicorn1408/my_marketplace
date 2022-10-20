const {User} = require('../user.model');

const createUser = async (ctx) => {
  const newUserData = ctx.request.body

  const newUser = await User.query().insert({
    first_name : newUserData.first_name,
    last_name : newUserData.last_name,
    email : newUserData.email,
    password : newUserData.password
  });

  return ctx.response.body = newUser
};

module.exports = { createUser };
