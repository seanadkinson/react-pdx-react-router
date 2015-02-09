"use strict";

var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');


// Request parsing/serving
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


if (process.env.NODE_ENV === 'development') {

    // Webpack
    var webpack = require('webpack');
    var webpackMiddleware = require("webpack-dev-middleware");
    app.use('/js/build', webpackMiddleware(webpack(require('./webpack.dev.js')), {
        noInfo: true
    }));

    // Compass
    app.use('/css', require('node-compass')({
        mode: 'expanded',
        css: 'css',
        sass: 'sass',
        logging: true
    }));

    // Bluebird
    require('bluebird').longStackTraces();
}


// Static assets
app.use(express.static(path.join(__dirname, 'public')));



// Locals
app.use(function(req, res, next) {
    res.locals.appVersion = process.env['APP_VERSION'] || 1;
    next();
});



// Application
app.use('/app', require('./routes/apps'));
app.use('/items', require('./routes/items'));





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
