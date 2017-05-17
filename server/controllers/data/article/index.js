var ejs = require('ejs');
var model = require('models');
var Article = model.Article;

// GET -------------------------------------------------------------------------
// exports.get = local('controllers/data/article/get');

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

// POST ------------------------------------------------------------------------
// exports.post = local('controllers/data/article/post');

exports.new = function (req, res, next) {
	// Add a new article
	var article = new Article(req.body);
	var promise = article.save();

	promise.then(next);
	promise.catch(next);

	return promise;
};

exports.update = function (req, res, next) {
	// Update an article
	var query = Article.update({
		slug: req.params.article
	}, { $set: req.body });

	query.then(next);
	query.catch(next);

	return query;
};

exports.delete = function (req, res, next) {
	// Delete an article
	var query = Article.findOneAndRemove({
		slug: req.params.article
	});

	query.then(next);
	query.catch(next);

	return query;
};
