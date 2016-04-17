var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/login*', function(req, res) {
  res.render('partials/login');
});

router.get('/fail*', function(req, res) {
  res.render('partials/fail');
});

router.get('/selectAction*', function(req, res) {
  res.render('partials/selectAction');
});

router.get('/editHomePage.html', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/editHomePage.html'));
});

router.get('/addArticlePage.html', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/addArticlePage.html'));
});
module.exports = router;
