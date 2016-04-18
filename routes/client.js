var express = require('express');
var router = express.Router();
var path = require('path');
var Article = require('../mongodb/models').Article;

router.get('/homepage', function(req, res) {
  res.render('partials/client/homepage', { layout: 'client' });
});

router.get('/blogs', function(req, res) {
  Article.find({}, null, { sort: '-date' }, function(err, docs) {
    res.render('partials/client/blogs', { layout: 'client', articles: docs });
  });
});

router.get('/events', function(req, res) {
  res.render('partials/client/events', { layout: 'client' });
});

router.get('/contact', function(req, res) {
  res.render('partials/client/contact', { layout: 'client' });
});

router.get('/jobs', function(req, res) {
  res.render('partials/client/jobs', { layout: 'client' });
});

module.exports = router;
