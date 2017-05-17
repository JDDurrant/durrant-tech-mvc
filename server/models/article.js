var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
	title: { type: String, reqiured: true },
	slug: { type: String, required: true, unique: true },
	author: { type: String, required: true },
	body: { type: String, required: true },
	date: { type: Date, default: Date.now },
	public: { type: Boolean, required: true }
});

// var Article = mongoose.model('Article', articleSchema);

// article-related methods go here; consider importing them from controllers

// These methods aren't included in module.exports and can't be used in other
// modules.
// UPDATE: These methods are exported; just tucked away in a pile of objects.
// See bottom of file for how to use them.

articleSchema.methods.list = function () {
	// List articles
	console.log('POST /api -> model.article.list');
	Article.find({}, function (err, data) {
		if(err) return err;
		return data;
	});
};

articleSchema.methods.add = function (object, next) {
	// Add an article
	var article = new Article(object);
	article.save(function (err) {
		if(err) return err;
		return next();
	});
};

// As far as I can tell, the methods above aren't exported for use in other
// modules. I'll have to read up on what use they do have.
// UPDATE: These methods are exported; just tucked away in a pile of objects.

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;

// Schema:	Article.schema.tree
// Methods:	Article.schema.methods
