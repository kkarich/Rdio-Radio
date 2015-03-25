'use strict';

angular.module('rdio').factory('Rdioapi', [ '$http',
	function($http) {
		// Rdioapi service logic
		// ...

		// Public API
		return {
			search: function(searchText) {
				return $http.get('/rdio/search/'+ searchText );
			},
			getAlbumsByArtist: function(id) {
				return $http.get('/rdio/albumsByArtist/'+ id );
			},
			getTracksByArtist: function(id) {
				return $http.get('/rdio/tracksByArtist/'+ id );
			},
			getAlbumById: function(id) {
				return $http.get('/rdio/albumById/'+ id );
			},
			getTrackById: function(id) {
				return $http.get('/rdio/trackById/'+ id );
			}

		};
	}
]);