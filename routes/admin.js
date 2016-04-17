var express = require('express');
var router = express.Router();

router.get('/login*', function(req, res) {
  res.render('partials/login');
});

router.get('/fail*', function(req, res) {
  res.render('partials/fail');
});

router.get('/selectAction*', function(req, res) {
  res.render('partials/selectAction');
});

router.get('/editHomePage*', function(req, res) {
  res.render('partials/editHomePage');
});

router.get('/addArticlePage*', function(req, res) {
  res.render('partials/addArticlePage');
});

module.exports = router;
