var express = require('express');
var router = express.Router();
var path = require('path');
var Article = require('../mongodb/models').Article;

var randomInt = function() {
  return Math.floor(Math.random() * 6 + 1);
}

router.get('/homepage*', function(req, res) {
  res.render('partials/client/homepage', { layout: 'client' });
});

router.get('/blogs*', function(req, res) {
  Article.find({}, null, { sort: '-date' }, function(err, docs) {
    docs.forEach(function(item, index, array) {
      console.log(item);
      item.imgNum = randomInt();
    });
    res.render('partials/client/blogs', { layout: 'client', articles: docs });
  });
});

module.exports = router;
