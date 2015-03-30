'use strict';

(function() {
	// View artist Controller Spec
	describe('View artist Controller Tests', function() {
		// Initialize global variables
		var ViewArtistController,
			scope,
			$httpBackend,
			$stateParams,
			$location;

		// The $resource service augments the response object with methods for updating and deleting the resource.
		// If we were to use the standard toEqual matcher, our tests would fail because the test values would not match
		// the responses exactly. To solve the problem, we define a new toEqualData Jasmine matcher.
		// When the toEqualData matcher compares two objects, it takes only object properties into
		// account and ignores methods.
		beforeEach(function() {
			jasmine.addMatchers({
				toEqualData: function(util, customEqualityTesters) {
					return {
						compare: function(actual, expected) {
							return {
								pass: angular.equals(actual, expected)
							};
						}
					};
				}
			});
		});

		// Then we can start by loading the main application module
		beforeEach(module(ApplicationConfiguration.applicationModuleName));

		// The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
		// This allows us to inject a service but then attach it to a variable
		// with the same name as the service.
		beforeEach(inject(function($controller, $rootScope, _$location_, _$stateParams_, _$httpBackend_) {
			// Set a new global scope
			scope = $rootScope.$new();

			// Point global variables to injected services
			$stateParams = _$stateParams_;
			$httpBackend = _$httpBackend_;
			$location = _$location_;

			$httpBackend.when('GET', '/rdio/albumsByArtist/r330802')
                            .respond({"data":[{"object_type":"album","id":"a243122","duration":2935,"type":"album","price":"None","icon":"http://rdio3img-a.akamaihd.net/album/2/b/5/000000000003b5b2/square-200.jpg","name":"The Burning Hour","artist":"Test Your Reflex","url":"/artist/Test_Your_Reflex/album/The_Burning_Hour/","artist_id":"r330802","length":22,"track_ids":["t2957501","t2957600","t2957674","t2957759","t2957839","t2957932","t2958002","t2958105","t2958210","t2958295","t2958397","t2958497"]},{"object_type":"album","id":"a260997","duration":226,"type":"album","price":"None","icon":"http://rdio3img-a.akamaihd.net/album/5/8/b/000000000003fb85/square-200.jpg","name":"Pieces Of The Sun","artist":"Test Your Reflex","url":"/artist/Test_Your_Reflex/album/Pieces_Of_The_Sun/","artist_id":"r330802","length":22,"track_ids":["t3202956"]}]});
		     $httpBackend.when('GET', '/rdio/tracksByArtist/r330802')
		                            .respond({"data":[{"object_type":"track","id":"t2957674","duration":217,"album":"The Burning Hour","type":"track","price":"None","album_artist_key":"r330802","radio_id":"sr2957674","icon":"http://rdio3img-a.akamaihd.net/album/2/b/5/000000000003b5b2/square-200.jpg","name":"Thinking Of You","artist":"Test Your Reflex","url":"/artist/Test_Your_Reflex/album/The_Burning_Hour/track/Thinking_Of_You/","icon400":"http://rdio1img-a.akamaihd.net/album/2/b/5/000000000003b5b2/square-400.jpg","artist_id":"r330802","length":31,"albumKey":"a243122"}]});


			// Initialize the View artist controller.
			ViewArtistController = $controller('ViewArtistController', {
				$scope: scope,
				$stateParams:{id: 'r330802'}
			});
		}));

		it('should get albums and tracks for artist', inject(function() {
			$httpBackend.expectGET('/rdio/albumsByArtist/r330802');
        	$httpBackend.expectGET('/rdio/tracksByArtist/r330802');
        	$httpBackend.flush();
		}));

		it('should get artist name', inject(function() {
			$httpBackend.expectGET('/rdio/albumsByArtist/r330802');
        	$httpBackend.expectGET('/rdio/tracksByArtist/r330802');
        	$httpBackend.flush();
      
       		expect(scope.artistName).toEqual('Test Your Reflex');
		}));
	});
}());