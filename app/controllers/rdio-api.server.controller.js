'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	request = require('request'),
    _ = require('lodash');


exports.search = function(req, res) {
	var search =  req.param('searchText');
    
    var url = 'http://rdio-service.herokuapp.com/search?q=' + search

    request({
    url: url,
    json: true
		}, function(error, response, body){
        // First we'll check to make sure no errors occurred when making the request

        	if(!error){
            	res.json(body);
            	}
        	})

};

exports.albumsByArtist = function(req, res) {
	var id =  req.param('Id');
    
    var url = 'http://rdio-service.herokuapp.com/albums?artist_id=' + id

    request({
    url: url,
    json: true
		}, function(error, response, body){
        // First we'll check to make sure no errors occurred when making the request

        	if(!error){
            	res.json(body);
            	}
        	})
};

exports.tracksByArtist = function(req, res) {

	var id =  req.param('Id');
    
    var url = 'http://rdio-service.herokuapp.com/tracks?artist_id=' + id;

    request({
    url: url,
    json: true
		}, function(error, response, body){
        // First we'll check to make sure no errors occurred when making the request

        	if(!error){
            	res.json(body);
            	}
        	})

};

exports.albumById = function(req, res) {

	var id =  req.param('Id');
    
    var url = 'http://rdio-service.herokuapp.com/albums/' + id

    request({
    url: url,
    json: true
		}, function(error, response, body){
        // First we'll check to make sure no errors occurred when making the request

        	if(!error){
            	res.json(body);
            	}
        	})

};

exports.trackById = function(req, res) {

	var id =  req.param('Id');
    
    var url = 'http://rdio-service.herokuapp.com/tracks/' + id

    request({
    url: url,
    json: true
		}, function(error, response, body){
        // First we'll check to make sure no errors occurred when making the request

        	if(!error){
            	res.json(body);
            	}
        	})
};
