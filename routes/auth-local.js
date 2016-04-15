var express = require('express');
var router = express.Router();

var passport = require('passport');
var Strategy = require('passport-local').Strategy;

// High level serialize/de-serialize configuration for passport
passport.serializeUser(function(user, done) {
//  console.log('in serializeUser, put user data into session storage');
  done(null, user);
});

passport.deserializeUser(function(user, done) {
//  console.log('deserializeUser user: ', user);
  done(null, user);
});

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new Strategy(
  function(username, password, cb) {
    var user = {
      username: 'admin'
    };

    if (username !== 'admin' || password !== 'admin') {
      return cb(null, false);
    }

    return cb(null, user);
  }));

router.use(passport.initialize());
router.use(passport.session());

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/loginFail.html' }),
  function(req, res) {
//    console.log('In auth, user: ', req.user);
    res.redirect('/index.html');
  });

router.get('/logout', function(req, res) {
//  console.log('user: ', req.user);
  console.log('hit logout');
  req.logout();
  res.send('good');
//  res.redirect('/index.html');
});


module.exports = router;
