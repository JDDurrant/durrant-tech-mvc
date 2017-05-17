var model = require('models');
var Article = model.Article;

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
