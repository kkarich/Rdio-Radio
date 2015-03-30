'use strict';

angular.module('rdio').controller('PlayerPanelController', ['$scope', '$interval', '$mdSidenav',
	function($scope, $interval, $mdSidenav) {
      var previousPosition = 0;
      var currentPosition = 0;
      var deltaPosition = 0;
      var previousTime;
      var currentTime = Date.now(); 
      var timeElapsed;
      var duration;
      var playing = true;

      $scope.trackProgress =0;

       $interval(function() {
          if(timeElapsed && playing){
          $scope.trackProgress += 100* deltaPosition/timeElapsed;

        }
          
        }, 100, 0, true);


       $scope.$on('updateCurrentSong', function(event, args) {
        
        $('#api').rdio().play(args);
        
     });
       
       $('#api').bind('ready.rdio', function() {
            
            $('#api').rdio().play('a223097');
            $scope.$apply();
          });

        $('#api').bind('playingTrackChanged.rdio', function(e, playingTrack, sourcePosition) {
              duration = playingTrack.duration;
              
              $('#art').attr('src', playingTrack.icon);
              $('#track').text(playingTrack.name);
              $('#album').text(playingTrack.album);
              $('#artist').text(playingTrack.artist);
              
            
            });
          $('#api').bind('positionChanged.rdio', function(e, position) {
                previousPosition = currentPosition;
                currentPosition = 100*position/duration
                deltaPosition = currentPosition - previousPosition;

                previousTime = currentTime
                currentTime = Date.now()
                timeElapsed = currentTime - previousTime

                
                $scope.trackProgress = 100*position/duration
                $scope.$apply();
          });

          $('#api').bind('playStateChanged.rdio', function(e, playState) {
            if (playState == 0) { // paused
              $('#play').show();
              $('#pause').hide();
              playing = false
            } else {
              $('#play').hide();
              $('#pause').show();
              playing = true
            }
          });
          
          //local host
          //$('#api').rdio('GAlNi78J_____zlyYWs5ZG02N2pkaHlhcWsyOWJtYjkyN2xvY2FsaG9zdEbwl7EHvbylWSWFWYMZwfc=');
          // this is a valid playback token for rdio-app.herokuapp.com.
          $('#api').rdio('GBZVGdR______2R2cHlzNHd5ZXg3Z2M0OXdoaDY3aHdrbnJkaW8tYXBwLmhlcm9rdWFwcC5jb21r-S1cKZRXAOT4cq-0zic5');
          $('#previous').click(function() { $('#api').rdio().previous(); });
          $('#play').click(function() { $('#api').rdio().play(); });
          $('#pause').click(function() { $('#api').rdio().pause(); });
          $('#next').click(function() { $('#api').rdio().next(); });

	}
]);