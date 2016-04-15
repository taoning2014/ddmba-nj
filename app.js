var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
var bodyParser = require('body-parser');
var cors = require('cors');
var errorhandler = require('errorhandler');

var angularPage = require('./routes/angularPage');
var authlocal = require('./routes/auth-local');

var app = express();

var config = require('./config.json')[app.get('env')];
console.log('config obj', config);
var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || config.mongo_url;

app.use(cors());
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'ddmba take me home',
  store: new MongoStore({ url: uristring })
}));
// static resource for static page and angular
app.use(express.static(__dirname + '/public'));

app.use('/', angularPage);
app.use('/api/auth', authlocal);

// Handle 404
app.use(function(req, res) {
  console.log(req.url);
  res.status(404).send('404 error');
});

// Error Handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(errorhandler());
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
