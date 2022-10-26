const { User } = require('./user.model');

const UserRepository = {

  async create(userData) {
    const newUser = await User.query().insertGraph({
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email,
      password: userData.password,
      phone_number: [
        {
          number: userData.number,
          type: 'user',
        },
      ],
    });

    return newUser
  },

  async findByEmail(email) {
    const result = await User.query()
      .where('email', email);

    return result;
  },
};

module.exports = { UserRepository };
