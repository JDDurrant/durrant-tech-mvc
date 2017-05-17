var express = require('express');
var controller = require('controllers');
var Article = controller.Article;
var Response = controller.Response;
var HTML = Response.HTML;
var JSON = Response.JSON;
var Redirect = Response.Redirect;

var router = express.Router();

router.get('/', Redirect('/article/test-form'));

router.get('/article/:article', Article.slug, HTML);

router.use('/api', require('routes/api'));
// router.use('/submit', local('routes/post'));

module.exports = router;
