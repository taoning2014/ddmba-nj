var express = require('express');
var app = express();
var mongoose = require('mongoose');

var uristring = process.env.MONGODB_URI || process.env.mongo_url_local_dev;

var User;
var Article;
var models;

mongoose.connect(uristring);

User = mongoose.model('User', require('./userSchema'), 'users');
Article = mongoose.model('Article', require('./articleSchema'), 'article');
models = {
  User: User,
  Article: Article
};

module.exports = models;
