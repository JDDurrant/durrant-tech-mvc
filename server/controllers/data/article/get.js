var model = require('models');
var Article = model.Article;
// var controller = local('controllers');
// var Response = controller.Response;
var response = require('response');

// var test = require('test');
// Stored in a separate node_modules directory; seems to work.

exports.list = function (req, res, next) {
	// Get all articles
	var query = Article.find({});

	query.then(next);
	// query.catch(next);

	// return query;
};

exports.slug = function (req, res, next) {
	// Get a specific article
	var query = Article.findOne({
		slug: req.params.article
	});

	query.then(next);
	// query.catch(next);
	//
	// return query;
};
