var $ = require('jquery');

exports.currentPage = function () {
	var	$nav = $('.nav'),
		$links = $nav.find('a'),
		current = window.location.href;

	$links.each(function (i, $link) {
		var	$this = $(this),
			href = $link.href;

		if(href === current) {
			$this.addClass('active');
		}
	});
};
