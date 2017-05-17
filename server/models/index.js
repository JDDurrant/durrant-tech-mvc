var mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost:27017/durrant-tech');

exports.Article = require('models/article');
// exports.Blog = require('models/blog');
