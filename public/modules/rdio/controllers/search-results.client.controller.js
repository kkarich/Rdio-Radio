'use strict';

angular.module('rdio').controller('SearchResultsController', ['$scope', '$stateParams', 'Rdioapi','$filter',
	function($scope,$stateParams,Rdioapi,$filter) {
		
		$scope.searchText = $stateParams.searchText; 

		Rdioapi.search($scope.searchText)
        .success(function(data, status, headers, config) {
     
           	var items = data.data;

           	$scope.artists = $filter('filter')(items, { type: "artist" });
      		$scope.albums = $filter('filter')(items, { type: "album" });
      		$scope.tracks = $filter('filter')(items, { type: "track" });
          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });

	}
]);