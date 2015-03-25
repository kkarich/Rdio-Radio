'use strict';

angular.module('rdio').factory('Rdioapi', [ '$http',
	function($http) {
		// Rdioapi service logic
		// ...

		// Public API
		return {
			search: function(searchText) {
				return $http.get('/rdio/search/'+ searchText );
			}
		};
	}
]);