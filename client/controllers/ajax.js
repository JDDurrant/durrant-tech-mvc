var	$ = require('jquery'),
	// ejs = require('../../bower_components/ejs');
	ejs = require('ejs');

var templates = {};

// exports.getTemplate = function (template, next) {
// 	// Download a template from the server
// 	var	url = '/template/' + template + '.ejs',
// 		data = $.get(url, next);
//
// 	return data;
// };

function getTemplate(template) {
	// Download and store a template
	if(!templates[template]){
		templates[template] = $.get('/template/' + template + '.ejs');
	}

	return templates[template];
}

function getData(url) {
	// Download data from the server
	return $.get(url);
}

function render(template, data, options) {
	// Render data using a template
	getTemplate(template);

	var html = ejs.render(templates[template], data, options);
	// console.log(html);
	return html;
}

exports.render = function (template, url) {
	// Download template and data; render it
	var file = getTemplate(template),
		data = getData(url),

		completed =	$.when(file, data);

	completed.then(function (template, data) {
		// After template and data are downloaded
		var html = ejs.render(template[0], {
			article: data[0]
		});

		$('#content').html(html);
	});

	// console.log(file);
	// console.log(data);
};
