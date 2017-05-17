var bodyParser = require('body-parser');
var browserify = require('browserify-middleware');
var cookieParser = require('cookie-parser');
var express = require('express');
var less = require('express-less');
var logger = require('morgan');
var serve = express.static;

var router = express.Router();

router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
router.use(cookieParser());
router.use(logger(':method :url :status :res[content-length] - :response-time ms'));

router.use('/template', serve('./client/views/templates'));
router.use('/bower', serve('./client/bower_components'));
router.use('/css', less('./client/views/stylesheets/attempt-3', {
	compress: true,
	debug: true
}));
router.use('/fonts', serve('./client/views/fonts'));
// app.use('/js', serve('./client/controllers'));
router.use('/js', browserify('./client/controllers', {
	// cache: true,
	// precompile: true,
	// minify: true,
	// gzip: true

	// Enable the options above in production to optimize file size.
	// Disable them in development to reduce app startup time.
}));

module.exports = router;
