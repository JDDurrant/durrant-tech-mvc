exports.HTML = require('controllers/modules/response/html');

exports.JSON = function (data, req, res, next) {
	// Respond with JSON document
	res.json(data);
};

exports.Redirect = function (url) {
	// Respond with a redirect
	return function (req, res, next) {
		res.redirect(url);
	};
};
