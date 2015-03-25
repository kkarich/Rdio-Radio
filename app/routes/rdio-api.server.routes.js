'use strict';

module.exports = function(app) {
	var rdio = require('../../app/controllers/rdio-api.server.controller');

	app.route('/rdio/search/:searchText').get(rdio.search);

	app.route('/rdio/albumsByArtist/:Id').get(rdio.albumsByArtist);
	app.route('/rdio/tracksByArtist/:Id').get(rdio.tracksByArtist);
	app.route('/rdio/albumById/:Id').get(rdio.albumById);
	app.route('/rdio/trackById/:Id').get(rdio.trackById);
};