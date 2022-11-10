const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const { UserRepository } = require('../users/user.repository');
// const { UserRepository } = require('../users/index');
// => (node:14561) Warning: Accessing non-existent property
// 'UserRepository' of module exports inside circular dependency
// (Use `node --trace-warnings ...` to show where the warning was created

const config = require('../../../config');

const optsAccess = {};
optsAccess.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
optsAccess.secretOrKey = config.accessTokenSecretKey;

passport.use('accessJWT', new JwtStrategy(optsAccess, async (jwtPayload, done) => {
  try {
    const user = await UserRepository.findById(jwtPayload.id);
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    console.log(error);
    return null;
  }
}));

const optsRefresh = {};
optsRefresh.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
optsRefresh.secretOrKey = config.refreshTokenSecretKey;

passport.use('refreshJWT', new JwtStrategy(optsRefresh, async (jwtPayload, done) => {
  try {
    const user = await UserRepository.findById(jwtPayload.id);
    if (user) {
      return done(null, user);
    }
    return done(null, false);
  } catch (error) {
    console.log(error);
    return null;
  }
}));
