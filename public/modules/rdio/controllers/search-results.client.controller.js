'use strict';

angular.module('rdio').controller('SearchResultsController', ['$scope', '$stateParams', 'Rdioapi','$filter',
	function($scope,$stateParams,Rdioapi,$filter) {
		var loadingMessages = [
			{
				text:"Without music, life would be a mistake.",
				by:"Friedrich Nietzsche"
			},
			{
				text:"One good thing about music, when it hits you, you feel no pain.",
				by:"Bob Marley"
			},
			{
				text:"Music can change the world because it can change people",
				by:"Bono"
			},
			{
				text:"Music in the soul can be heard by the universe",
				by:"Lao Tzu"
			},
			{
				text:"Music is the soundtrack of your life",
				by:"Dick Clark"
			}

		];

		$scope.searchText = $stateParams.searchText; 
		$scope.loading = true;

		var rand = Math.floor(Math.random() * loadingMessages.length);

		$scope.loadingMessage = loadingMessages[rand];

		Rdioapi.search($scope.searchText)
        .success(function(data, status, headers, config) {
     		$scope.loading = false;
     		
        var items = data.data;

          $scope.artists = $filter('filter')(items, { type: "artist" });
      		$scope.albums = $filter('filter')(items, { type: "album" });
      		$scope.tracks = $filter('filter')(items, { type: "track" });



      for (var i = 0; i < $scope.artists.length; i++) { 
          Rdioapi.getAlbumsByArtist($scope.artists[i].id)
           .success(function(data) {
            var index = $scope.artists.indexOf($filter('filter')($scope.artists, { id: data.data[0].artist_id })[0]);
            $scope.artists[index].icon = data.data[0].icon;
            
      })
      .error(function(data) {
        console.log('Error: ' + data)
        
      });
      }
      
      for (i = 0; i < $scope.albums.length; i++) { 
          Rdioapi.getAlbumById($scope.albums[i].id)
           .success(function(data) {
            var index = $scope.albums.indexOf($filter('filter')($scope.albums, { id: data.data.id })[0]);
            $scope.albums[index] = data.data;
            
      })
      .error(function(data) {
        console.log('Error: ' + data)
        
      });
      }
     
      for (i = 0; i < $scope.tracks.length; i++) { 
          Rdioapi.getTrackById($scope.tracks[i].id)
           .success(function(data) {
            var index = $scope.tracks.indexOf($filter('filter')($scope.tracks, { id: data.data.id })[0]);
            $scope.tracks[index] = data.data
            
      })
      .error(function(data) {
        console.log('Error: ' + data)
        
      });
      }

          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });


	}
]);