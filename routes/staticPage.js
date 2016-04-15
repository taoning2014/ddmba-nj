var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/homepage.html', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/homepage.html'));
});

module.exports = router;
