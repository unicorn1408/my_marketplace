const jwt = require('jsonwebtoken');
const config = require('../../config');

const getJWT = (data) => {
  const token = jwt.sign(data, config.secretKey);
  return token;
};

module.exports = { getJWT };
