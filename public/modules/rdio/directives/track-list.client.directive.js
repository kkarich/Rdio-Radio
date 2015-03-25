'use strict';

angular.module('rdio').directive('trackList', [
	function() {
		return {
			templateUrl: 'modules/rdio/views/track-list.client.view.html',
			restrict: 'E',
           controller: function ($scope,$rootScope) {
           $scope.playTrack = function (trackId) {
                $rootScope.$broadcast('updateCurrentSong',trackId);
              };
              $scope.hoverIn = function () {
               this.hovered = true
              };
              $scope.hoverOut = function () {
                this.hovered = false
              };

          }
		};
	}
]);