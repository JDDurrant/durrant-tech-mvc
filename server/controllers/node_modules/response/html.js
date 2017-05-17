var ejs = require('ejs');

module.exports = function (data, req, res, next) {
	// Respond with HTML
	data.body = ejs.render(data.body, {}, {
		filename: 'server/views/layout'
	});

	res.render('layout', {
		title: data.title,
		template: 'templates/article',
		article: data
	});
};
