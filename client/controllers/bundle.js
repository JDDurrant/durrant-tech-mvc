var	$ = require('jquery'),
	// path = require('path'),
	// url = require('url'),

	ajax = require('./ajax'),
	navigation = require('./navigation');

$(function () {
	// Execute when page has loaded
	navigation.currentPage();

	$('.ajax').click(function (event) {
		// Handle AJAX links
		event.preventDefault();

		var	$this = $(this),
			url = $this.data('xhr');

		ajax.render('article', url);

	});
});
