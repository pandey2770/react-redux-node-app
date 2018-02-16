var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./user')
const {comparePassword} = require('./password');

 passport.use(
  new LocalStrategy(async (username, password, done) => {
    var user = await User.get(username);
    if (user.length === 1) {
      const passwordMatch = await comparePassword(password, user[0].password);
      if (passwordMatch) {
        return done(null, user[0]);
      }
    }
    return done(null, false);
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  User.getById(id)
    .then((user) => {
      done(null, user[0]);
    })
    .catch((error) => {
      console.log(`Error: ${error}`);
    });
  }
);
