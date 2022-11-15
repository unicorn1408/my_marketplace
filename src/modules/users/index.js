const { UserModel } = require('./user.model');
const { userRouter } = require('./routes');
const { UserRepository } = require('./user.repository');

module.exports = { UserModel, userRouter, UserRepository };
