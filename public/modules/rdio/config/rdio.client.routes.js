'use strict';

//Setting up route
angular.module('rdio').config(['$stateProvider',
	function($stateProvider) {
		// Rdio state routing
		$stateProvider.
		state('view-album', {
			url: '/view-album',
			templateUrl: 'modules/rdio/views/view-album.client.view.html'
		}).
		state('view-artist', {
			url: '/view-artist',
			controller: 'SearchResultsController',
			templateUrl: 'modules/rdio/views/view-artist.client.view.html'
		}).
		state('search-results', {
			url: '/search-results/:searchText',
			templateUrl: 'modules/rdio/views/search-results.client.view.html'
		}).
		state('my-music', {
			url: '/my-music',
			templateUrl: 'modules/rdio/views/my-music.client.view.html'
		});
	}
]);