require("dotenv").config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var expressLayouts = require('express-ejs-layouts');
var session = require('express-session');
var flash = require('connect-flash');
var configRouter = require(`${__dirname}/routes/amr.config.js`);
var controlRouter = require(`${__dirname}/routes/amr.control.js`);
var navigationRouter = require(`${__dirname}/routes/amr.navigation.js`);
var otherRouter = require(`${__dirname}/routes/amr.other.js`);
var pushRouter = require(`${__dirname}/routes/amr.push.js`);
var statusRouter = require(`${__dirname}/routes/amr.status.js`);
var home = require(`${__dirname}/routes/index.js`)

var app = express();
var server = require('http').Server(app);
io = require('socket.io')(server);
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressLayouts);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(`${__dirname}/../node_modules`));

app.use(session({
  secret: 'nodejs',
  resave: false,
  saveUninitialized: true,
}))
app.use(flash());

app.use('/config', configRouter);
app.use('/control', controlRouter);
app.use('/navigation', navigationRouter);
app.use('/other', otherRouter);
app.use('/push', pushRouter);
app.use('/status', statusRouter);
app.use('/', home)

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

module.exports = {app: server, io};
