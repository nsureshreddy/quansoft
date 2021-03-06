var express = require('express');
var path = require('path');
const compression = require('compression')

var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var config = require('./config/database');

var api = require('./routes/api');
var app = express();

mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('--- MongoDB Connection Succesful :) ---'))
  .catch((err) => console.error(err));


var dist = path.join(__dirname, '../ng/dist')

app.use(compression ());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(dist));
app.get('/favicon.ico', (req, res) => res.status(204));
app.use('/', express.static(dist));
app.use('/login', express.static(dist));
app.use('/dashboard/*', express.static(dist));
app.use('/masters/*', express.static(dist));
app.use('/cost-estimates/*', express.static(dist));
app.use('/vendors/*', express.static(dist));
app.use('/settings/*', express.static(dist));
app.use('/auth/*', express.static(dist));
app.use('/api', api);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;