'use strict';

angular.module('rdio').controller('ViewAlbumController', ['$scope', '$stateParams', 'Rdioapi',
	function($scope,$stateParams,Rdioapi) {
		var albumId = $stateParams.id
 


  Rdioapi.getAlbumById(albumId)
   .success(function(data) {
        var album = data.data;
        

        $scope.album = album
        $scope.tracks = album.track_ids;

        for (var i = 0; i < $scope.tracks.length; i++) { 
  
          Rdioapi.getTrackById(album.track_ids[i])
           .success(function(data) {
            var index = $scope.tracks.indexOf( data.data.id);
            $scope.tracks[index] = data.data

      })
      .error(function(data) {
        console.log('Error: ' + data)
        
      });
    }
        

      })
      .error(function(data) {
        console.log('Error: ' + data)
        
      });

}
]);