'use strict';

(function() {
	// Search results Controller Spec
	describe('Search results Controller Tests', function() {
		// Initialize global variables
		var SearchResultsController,
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

			$httpBackend.when('GET', '/rdio/search/test')
				.respond({"data" : [{"object_type":"search_result","id":"t2957501","name":"Test Pattern","url":"/artist/The_Thermals/album/The_Body%2C_The_Blood%2C_The_Machine/track/Test_Pattern/","length":31,"radio_id":"sr2222185","type":"track","icon":"http://rdio3img-a.akamaihd.net/album/4/e/f/000000000002cfe4/square-200.jpg"},{"object_type":"search_result","id":"r330802","name":"Test Your Reflex","url":"/artist/Test_Your_Reflex/","length":11,"radio_id":"rr330802","type":"artist","icon":"http://rdio3img-a.akamaihd.net/artist/no-artist-image-square.png"},{"object_type":"search_result","id":"a243122","name":"The Burning Hour","url":"/artist/Test_Your_Reflex/album/The_Burning_Hour/","length":22,"type":"album","icon":"http://rdio3img-a.akamaihd.net/album/2/b/5/000000000003b5b2/square-200.jpg"}]} );

			
			$httpBackend.when('GET', '/rdio/albumsByArtist/r330802')
                            .respond({"data":[{"object_type":"album","id":"a243122","duration":2935,"type":"album","price":"None","icon":"http://rdio3img-a.akamaihd.net/album/2/b/5/000000000003b5b2/square-200.jpg","name":"The Burning Hour","artist":"Test Your Reflex","url":"/artist/Test_Your_Reflex/album/The_Burning_Hour/","artist_id":"r330802","length":22,"track_ids":["t2957501","t2957600","t2957674","t2957759","t2957839","t2957932","t2958002","t2958105","t2958210","t2958295","t2958397","t2958497"]},{"object_type":"album","id":"a260997","duration":226,"type":"album","price":"None","icon":"http://rdio3img-a.akamaihd.net/album/5/8/b/000000000003fb85/square-200.jpg","name":"Pieces Of The Sun","artist":"Test Your Reflex","url":"/artist/Test_Your_Reflex/album/Pieces_Of_The_Sun/","artist_id":"r330802","length":22,"track_ids":["t3202956"]}]});
		    $httpBackend.when('GET', '/rdio/tracksByArtist/r330802')
		                            .respond({"data":[{"object_type":"track","id":"t2957674","duration":217,"album":"The Burning Hour","type":"track","price":"None","album_artist_key":"r330802","radio_id":"sr2957674","icon":"http://rdio3img-a.akamaihd.net/album/2/b/5/000000000003b5b2/square-200.jpg","name":"Thinking Of You","artist":"Test Your Reflex","url":"/artist/Test_Your_Reflex/album/The_Burning_Hour/track/Thinking_Of_You/","icon400":"http://rdio1img-a.akamaihd.net/album/2/b/5/000000000003b5b2/square-400.jpg","artist_id":"r330802","length":31,"albumKey":"a243122"}]});

		    $httpBackend.when('GET', '/rdio/albumById/a243122')
                            .respond({"data":{"object_type":"album","id":"a243122","duration":2935,"type":"album","price":"None","icon":"http://rdio3img-a.akamaihd.net/album/2/b/5/000000000003b5b2/square-200.jpg","name":"The Burning Hour","artist":"Test Your Reflex","url":"/artist/Test_Your_Reflex/album/The_Burning_Hour/","artist_id":"r330802","length":12,"track_ids":["t2957501"]}});
 
     		$httpBackend.when('GET', '/rdio/trackById/t2957501')
                            .respond({"data":{"object_type":"track","id":"t2957501","duration":309,"album":"The Burning Hour","type":"track","price":"None","album_artist_key":"r330802","radio_id":"sr2957501","icon":"http://rdio3img-a.akamaihd.net/album/2/b/5/000000000003b5b2/square-200.jpg","name":"I'm Not Sorry","artist":"Test Your Reflex","url":"/artist/Test_Your_Reflex/album/The_Burning_Hour/track/I%27m_Not_Sorry/","icon400":"http://rdio1img-a.akamaihd.net/album/2/b/5/000000000003b5b2/square-400.jpg","artist_id":"r330802","length":1,"albumKey":"a243122"}});
 
		    



			// Initialize the Search results controller.
			SearchResultsController = $controller('SearchResultsController', {
				$scope: scope,
				$stateParams:{searchText : 'test'}
			});
		}));

		it('Should assign values to artist on valid search', inject(function() {
			// The test logic
			// ...
			$httpBackend.expectGET('/rdio/search/test');


        	$httpBackend.expectGET('/rdio/albumById/a243122');
        	$httpBackend.expectGET('/rdio/trackById/t2957501');
			
	        $httpBackend.flush();
	        expect(scope.artists[0].name).toEqual('Test Your Reflex');

		}));

		it('Should assign values to albums on valid search', inject(function() {
			// The test logic
			// ...
			$httpBackend.expectGET('/rdio/search/test');


        	$httpBackend.expectGET('/rdio/albumById/a243122');
        	$httpBackend.expectGET('/rdio/trackById/t2957501');

	        $httpBackend.flush();
	        expect(scope.albums[0].name).toEqual('The Burning Hour');
		}));

		it('Should assign values to tracks on valid search', inject(function() {
			// The test logic
			// ...
			$httpBackend.expectGET('/rdio/search/test');


        	$httpBackend.expectGET('/rdio/albumById/a243122');
        	$httpBackend.expectGET('/rdio/trackById/t2957501');


	        $httpBackend.flush();
	        expect(scope.tracks[0].name).toEqual('I\'m Not Sorry');
		}));

	});
}());