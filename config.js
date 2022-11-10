require('dotenv').config();

const config = {
  accessTokenSecretKey: process.env.ACCESS_SECRET_KEY,
  accessTokenLiveTime: process.env.ACCESS_TOKEN_LIVETIME,
  refreshTokenSecretKey: process.env.REFRESH_SECRET_KEY,
  refreshTokenLiveTime: process.env.REFRESH_TOKEN_LIVETIME,
};

module.exports = config;
