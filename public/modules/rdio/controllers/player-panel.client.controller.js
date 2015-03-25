'use strict';

angular.module('rdio').controller('PlayerPanelController', ['$scope',
	function($scope) {
		// Player panel controller logic
		// ...
	var disemvowel = function(input){
    
    var string = input.toLowerCase();
    var output = ''
    
    for (var i = 0, len = string.length; i < len; i++) {
        if(string[i] === 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u' )
            output += string[i];
        }
    
    return output  
};

console.log(disemvowel('a b c defghijklmnopqrstuvwxyz'))
	}
]);