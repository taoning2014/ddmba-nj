var express = require('express');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var bodyParser = require('body-parser');
var cors = require('cors');
var errorhandler = require('errorhandler');
var exphbs = require('express-handlebars');

var api = require('./routes/api');
var admin = require('./routes/admin');
var client = require('./routes/client');

var app = express();
//var config = require('./config.json')[app.get('env')];

var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || process.env.MONGODB_URI || config.mongo_url;

app.engine('handlebars', exphbs({
  defaultLayout: 'admin',
  partialsDir: 'views/partials/'
}));
app.set('view engine', 'handlebars');

app.use(cors());
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(require('express-session')({
  secret: 'ddmba take me home',
  store: new MongoStore({ url: uristring })
}));
app.use(express.static(__dirname + '/public'));

app.use('/api', api);
app.use('/admin', admin);
app.use('/client', client);

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
