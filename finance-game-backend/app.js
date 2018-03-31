var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userDataRouter = require('./routes/user-data');
var factionDataRouter = require('./routes/faction-data'); 
var progressRouter = require('./routes/progress'); 
var factionPercRouter = require('./routes/get-faction-percentage'); 
var addFactionPlayRouter = require('./routes/add-faction-play');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({type: 'application/json'}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user-data', userDataRouter);
app.use('/faction-data', factionDataRouter); 
app.use('/progress', progressRouter); 
app.use('/get-faction-percentage', factionPercRouter); 
app.use('/add-faction-play', addFactionPlayRouter); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
