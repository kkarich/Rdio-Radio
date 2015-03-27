'use strict';

angular.module('rdio').controller('ViewArtistController', ['$scope', '$stateParams', 'Rdioapi','$filter',
	function($scope,$stateParams,Rdioapi,$filter) {
		var artistId = $stateParams.id; 

	  Rdioapi.getAlbumsByArtist(artistId)
	   .success(function(data) {
	        $scope.albums = data.data;
	        
	        $scope.artistName = data.data[0].artist

	      })
	      .error(function(data) {
	        console.log('Error: ' + data)
	        
	      });

	 Rdioapi.getTracksByArtist(artistId)
	   .success(function(data) {
	        
	        
	        $scope.tracks = data.data;
	        

	      })
	      .error(function(data) {
	        console.log('Error: ' + data)
	        
	      });




	}
]);