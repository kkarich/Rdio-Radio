'use strict';

angular.module('rdio').controller('SearchBarController', ['$scope', '$http' ,'$q', '$location',
	function($scope,$http, $q,$location) {

  $scope.search = function(search){
            $location.path('/search-results/' + search);
        };

  $scope.query = function(searchText) {

       var deferred = $q.defer();
      
       $http.get('/rdio/search/'+searchText )
        .success(function(data, status, headers, config) {
           
          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });
      return deferred.promise
  }

}
]);