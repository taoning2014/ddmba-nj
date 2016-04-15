var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/login.html', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/login.html'));
});

router.get('/index.html', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

module.exports = router;
