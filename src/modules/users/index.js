const { User } = require('./user.model');
const { userRouter } = require('./routes');
const { UserRepository } = require('./user.repository');

module.exports = { User, userRouter, UserRepository };
