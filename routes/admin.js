var express = require('express');
var router = express.Router();

var passport = require('passport');
var Strategy = require('passport-local').Strategy;

var Article = require('../mongodb/models').Article;

router.use(passport.initialize());
router.use(passport.session());

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

router.get('/login', function(req, res) {
  res.render('partials/admin/login');
});

router.get('/fail', function(req, res) {
  res.render('partials/admin/fail');
});

router.get('/selectAction', function(req, res) {
  res.render('partials/admin/selectAction');
});

router.get('/selectActionWithPublishSuccess', function(req, res) {
  res.render('partials/admin/selectActionWithPublishSuccess');
});

router.get('/editHomePage', function(req, res) {
  res.render('partials/admin/editHomePage');
});

router.get('/addArticlePage', function(req, res) {
  Article.find({}, null, { sort: '-date' }, function(err, docs) {
    res.render('partials/admin/addArticlePage', { articles: docs });
  });
});

router.get('/editArticlePage/:_id', function(req, res) {
  Article.find({}, null, { sort: '-date' }, function(err, docs) {
    Article.find({ _id: req.params._id }, function(err, article) {
      if (article) {
        res.render('partials/admin/editArticlePage', {
          article: article[0],
          articles: docs
        });
      } else {
        res.redirect('/addArticlePage');
      }
    });
  });
});

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/fail' }),
  function(req, res) {
    res.redirect('/admin/selectAction');
  });

router.get('/logout', function(req, res) {
  console.log('hit logout');
  req.logout();
  res.send('good');
});

module.exports = router;

