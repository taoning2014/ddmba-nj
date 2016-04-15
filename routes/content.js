var express = require('express');
var router = express.Router();
var Article = require('../mongodb/models').Article;
var article;

router.post('/api/post/article', function(req, res) {
  console.log('title: ', req.body.title);
  console.log('content: ', req.body.content);
  article = new Article({
    title: req.body.title,
    content: req.body.content
  });
  article.save(function() {
    console.log('save to db');
    res.redirect('/index.html');
  });
});

module.exports = router;
