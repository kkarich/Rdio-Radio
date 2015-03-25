'use strict';

angular.module('rdio').controller('ViewArtistController', ['$scope', '$stateParams', 'Rdioapi','$filter',
	function($scope,$stateParams,Rdioapi,$filter) {
		$scope.id = $stateParams.id; 
	}
]);