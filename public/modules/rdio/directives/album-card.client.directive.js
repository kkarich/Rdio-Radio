'use strict';

angular.module('rdio').directive('albumCard', [
	function() {
		return {
			template: '<div></div>',
			restrict: 'E',
			link: function postLink(scope, element, attrs) {
				// Album card directive logic
				// ...

				element.text('this is the albumCard directive');
			}
		};
	}
]);