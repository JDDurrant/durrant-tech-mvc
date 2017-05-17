var express = require('express');
var controller = require('controllers');
var Article = controller.Article;
var Response = controller.Response;
var JSON = Response.JSON;
var Redirect = Response.Redirect;

var router = express.Router();

router.locals = router.get('locals');
console.log();

// var controller = router.locals.controllers;
// var Article = controller.Article;
// var Response = controller.Response;
// var JSON = Response.JSON;
// var Redirect = Response.Redirect;

router.get('/', Article.list, JSON);
router.get('/:article', Article.slug, JSON);

router.post('/', Article.new, JSON);
router.put('/:article', Article.update, JSON);
router.delete('/:article', Article.delete, JSON);

module.exports = router;
