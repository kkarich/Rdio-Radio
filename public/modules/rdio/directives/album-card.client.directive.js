'use strict';

angular.module('rdio').directive('albumCard', [
	function() {
		return {
			templateUrl: 'modules/rdio/views/album-card.client.view.html',
			restrict: 'E',
			controller: function ($scope,$rootScope) {
          $scope.playAlbum = function (albumId) {
                $rootScope.$broadcast('updateCurrentSong',albumId);
              };
          }
		};
	}
]);