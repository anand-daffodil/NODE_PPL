var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('./passports/passportConfig');
var session = require('express-session');
var cors = require('cors');
//var routes = require('./routes/index');
var users = require('./routes/users');
var posts = require('./routes/posts');
var categories = require('./routes/categories');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

var enableCORS = function(req, res, next){
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Credentials', true);
 res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
 res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, Action');
 if('OPTIONS' == req.method){
  res.send(200);
 }
 else{
  next();
 }
};
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(enableCORS);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'ppl')));

app.use(session({ secret: 'passport_ppl' }));
app.use(passport.initialize());
app.use(passport.session());

//app.use('/', routes);
app.use('/api/users/', users);
app.use('/api/posts/', posts);
app.use('/api/categories/', categories);
//app.use('/users', passport.authenticate('local'), users);


var multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, __dirname + '/ppl/uploads')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage });

app.post("/upload/url", upload.single('file'), function(req, res, next) {
    console.log(".hello", req.name);
    var path = "/uploads/" + req.file.originalname;
    res.send(path);
});



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
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
