'use strict';

angular.module('rdio').directive('trackList', [
	function() {
		return {
			template: '<div></div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				// Track list directive logic
				// ...

				element.text('this is the trackList directive');
			}
		};
	}
]);