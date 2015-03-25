'use strict';

angular.module('rdio').directive('artistCard', [
	function() {
		return {
			templateUrl: 'modules/rdio/views/artist-card.client.view.html',
			restrict: 'E',
			controller: function ($scope,$rootScope) {
	          $scope.playArtist = function (artistId) {
	                $rootScope.$broadcast('updateCurrentSong',artistId);
	              };
          	}
		};
	}
]);