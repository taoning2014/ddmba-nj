// This page are all rest api
var express = require('express');
var router = express.Router();
var Article = require('../mongodb/models').Article;
var article;

var randomInt = function() {
  return Math.floor(Math.random() * 6 + 1);
}

router.post('/api/post/article', function(req, res) {
  console.log('hit');
  article = new Article({
    title: req.body.title,
    content: req.body.content,
    imgURL: 'images/ddmba-nj/blogs/' + randomInt() + '.jpg'
  });
  article.save(function() {
    console.log('save to db');
    res.redirect('/selectActionWithPublishSuccess');
  });
});

module.exports = router;
