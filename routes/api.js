// This page are all rest api
var express = require('express');
var router = express.Router();
var Article = require('../mongodb/models').Article;
var article;

var randomInt = function() {
  return Math.floor(Math.random() * 6 + 1);
}

router.post('/post/article/:_id?', function(req, res) {

  // _id exist means edit existed article
  if (req.params._id) {
    console.log('Hit here', req.body.title, req.body.content);
    Article.findOneAndUpdate({ _id: req.params._id }, {
      title: req.body.title,
      content: req.body.content
    }, function() {
      console.log('Update success!');
      res.redirect('/admin/selectActionWithPublishSuccess');
    });
  } else {
    article = new Article({
      title: req.body.title,
      content: req.body.content,
      imgURL: 'images/ddmba-nj/blogs/' + randomInt() + '.jpg'
    });
    article.save(function() {
      console.log('save to db');
      res.redirect('/admin/selectActionWithPublishSuccess');
    });
  }
});

router.get('/delete/article/:_id', function(req, res) {
  console.log('hit /delete/article');
  console.log('params: ', req.params._id);
  Article.remove({ _id: req.params._id }, function() {
    console.log('delete success');
    res.redirect('/admin/addArticlePage');
  });
});

module.exports = router;
