'use strict';

(function() {
	// View album Controller Spec
	describe('View album Controller Tests', function() {
		// Initialize global variables
		var ViewAlbumController,
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

			$httpBackend.when('GET', '/rdio/albumById/a243122')
                            .respond({"data":{"object_type":"album","id":"a243122","duration":2935,"type":"album","price":"None","icon":"http://rdio3img-a.akamaihd.net/album/2/b/5/000000000003b5b2/square-200.jpg","name":"The Burning Hour","artist":"Test Your Reflex","url":"/artist/Test_Your_Reflex/album/The_Burning_Hour/","artist_id":"r330802","length":12,"track_ids":["t2957501"]}});
 
     		$httpBackend.when('GET', '/rdio/trackById/t2957501')
                            .respond({"data":{"object_type":"track","id":"t2957501","duration":309,"album":"The Burning Hour","type":"track","price":"None","album_artist_key":"r330802","radio_id":"sr2957501","icon":"http://rdio3img-a.akamaihd.net/album/2/b/5/000000000003b5b2/square-200.jpg","name":"I'm Not Sorry","artist":"Test Your Reflex","url":"/artist/Test_Your_Reflex/album/The_Burning_Hour/track/I%27m_Not_Sorry/","icon400":"http://rdio1img-a.akamaihd.net/album/2/b/5/000000000003b5b2/square-400.jpg","artist_id":"r330802","length":1,"albumKey":"a243122"}});
 

			// Initialize the View album controller.
			ViewAlbumController = $controller('ViewAlbumController', {
				$scope: scope,
				$stateParams:{id : 'a243122'}
			});
		}));

		it('Should get album info', inject(function() {
			$httpBackend.expectGET('/rdio/albumById/a243122');
	        $httpBackend.flush();
	        expect(scope.album.name).toEqual('The Burning Hour');

        
		}));

		it('Should get tracks info', inject(function() {
			$httpBackend.expectGET('/rdio/trackById/t2957501');
	        $httpBackend.flush();
	        expect(scope.tracks[0].name).toEqual('I\'m Not Sorry');
       
      

        
		}));
	});
}());