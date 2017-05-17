var ejs = require('ejs');
var express = require('express');
var serve = express.static;

process.chdir(__dirname);

// global.local = function (file) {
// 	return require(`${__dirname}/server/${file}`);
// };

var app = express();

app.locals.site = require('./site');

app.engine('ejs', ejs.__express);
app.set('env', process.env.NODE_ENV || 'development');
app.set('views', './server/views');
// app.set('view cache', true);
app.set('view engine', 'ejs');

app.use(require('./middleware')); // 3rd party middleware
app.use(serve('./client/public'));
app.use(require('routes'));

// The error handling code should be moved somewhere else. The functions will
// probably be moved to the controllers and invoked in the main router.
app.use(function (req, res, next) {
	// Handle bad URLs
	console.log(req.url);
	res.status(404).send("Invalid URL! <a href='#'>Report bad link</a>");
});

app.use(function (err, req, res, next) {
	// Handle back-end fuckups
	console.log(err.stack);
	res.status(500).send("We fucked up...");
});

// This is the end of the error handling chunk. For now, the server can stay
// in this file.
app.listen(3000, '127.0.0.1', function () {
	console.log('Listening on 127.0.0.1:3000...');
});
