var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/homepage.html', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/homepage.html'));
});

router.get('/blogs.html', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/blogs.html'));
});

router.get('/test', function(req, res) {
  res.render('test', { title: 'tao' });
});

module.exports = router;
