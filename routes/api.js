// This page are all rest api
var express = require('express');
var router = express.Router();
var Article = require('../mongodb/models').Article;
var article;

var randomInt = function() {
  return Math.floor(Math.random() * 6 + 1);
}

router.post('/api/post/article/:_id', function(req, res) {
  // _id exist means edit existed article
  if (req.params._id) {
    Article.findOneAndUpdate({ _id: req.params._id }, {
      $set: {
        title: req.body.title,
        content: req.body.content
      }
    }, function() {
      console.log('Update success!');
      res.redirect('/selectActionWithPublishSuccess');
    });
  } else {
    article = new Article({
      title: req.body.title,
      content: req.body.content,
      imgURL: 'images/ddmba-nj/blogs/' + randomInt() + '.jpg'
    });
    article.save(function() {
      console.log('save to db');
      res.redirect('/selectActionWithPublishSuccess');
    });
  }
});

router.get('/api/delete/article/:_id', function(req, res) {
  console.log('hit /api/delete/article');
  console.log('params: ', req.params._id);
  Article.remove({ _id: req.params._id }, function() {
    console.log('delete success');
    res.redirect('/addArticlePage');
  });
});

module.exports = router;
