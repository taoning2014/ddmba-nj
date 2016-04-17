var express = require('express');
var router = express.Router();

router.get('/login*', function(req, res) {
  res.render('partials/admin/login');
});

router.get('/fail*', function(req, res) {
  res.render('partials/admin/fail');
});

router.get('/selectAction*', function(req, res) {
  res.render('partials/admin/selectAction');
});

router.get('/editHomePage*', function(req, res) {
  res.render('partials/admin/editHomePage');
});

router.get('/addArticlePage*', function(req, res) {
  res.render('partials/admin/addArticlePage');
});

module.exports = router;
