'use strict';

angular.module('rdio').controller('MyMusicController', ['$scope', 'Rdioapi', '$filter',
	function($scope,Rdioapi,$filter) {
		

   $scope.albums = [{id:'a223097'},{id:'a269057'},{id:'a844766'},{id:'a4561358'},{id:'a3369794'}];
   $scope.tracks = [{id:'t1937673'},{id:'t3296920'},{id:'t1272725'},{id:'t49579418'},{id:'t35660907'}];

  for (var i = 0; i < $scope.albums.length; i++) { 
          Rdioapi.getAlbumById($scope.albums[i].id)
           .success(function(data) {
            var index = $scope.albums.indexOf($filter('filter')($scope.albums, { id: data.data.id })[0]);
            $scope.albums[index] = data.data
            
      })
      .error(function(data) {
        console.log('Error: ' + data)
        
      });
      }
     
      for (var i = 0; i < $scope.tracks.length; i++) { 
          Rdioapi.getTrackById($scope.tracks[i].id)
           .success(function(data) {
            var index = $scope.tracks.indexOf($filter('filter')($scope.tracks, { id: data.data.id })[0]);
            $scope.tracks[index] = data.data
            
      })
      .error(function(data) {
        console.log('Error: ' + data)
        
      });
      }


	}
]);