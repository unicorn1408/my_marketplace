const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;

const { ExtractJwt } = require('passport-jwt');
const config = require('../../../config');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

// eslint-disable-next-line camelcase
passport.use(new JwtStrategy(opts, (async (jwt_payload, done) => {
  // eslint-disable-next-line global-require
  const { UserRepository } = require('../users/index');
  try {
    // eslint-disable-next-line camelcase
    const user = await UserRepository.findByEmail(jwt_payload.email);
    if (user) {
      return done(null, user);
    }
    return done(null, false);
    // or you could create a new account
  } catch (error) {
    console.log(error);
    return null;
  }
})));
