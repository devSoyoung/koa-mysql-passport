const passport = require('koa-passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require('../models');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
}, function (email, password, done) {
  return db.User.findOne({ where: { email, password } })
    .then(user => {
      if (!user) {
        return done(null, false, { message: 'Incorrect email or password.'});
      }

      return done(null, user, { message: 'Logged In Successfully' });
    })
    .catch(err => done(err));
}))