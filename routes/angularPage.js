var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/login.html', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/login.html'));
});

router.get('/loginFail.html', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/loginFail.html'));
});

router.get('/index.html', function(req, res) {
  console.log('user: ', req.user);
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/editHomePage.html', function(req, res) {
  console.log('user: ', req.user);
  res.sendFile(path.join(__dirname, '../views/editHomePage.html'));
});

router.get('/addArticlePage.html', function(req, res) {
  console.log('user: ', req.user);
  res.sendFile(path.join(__dirname, '../views/addArticlePage.html'));
});
module.exports = router;
