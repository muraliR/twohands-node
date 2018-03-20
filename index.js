"use strict";

var request = require('request');

module.exports = {
	new_user: function(data,callback = function() {}){
		if(typeof two_hands_keys !== 'undefined'){
			const two_hands_api_token =  two_hands_keys.api_token;

			data['auth_token'] = two_hands_api_token;

			request.post({ url: 'http://localhost:3000/api/users/track', form: data, headers: {'Content-Type': 'application/json'} }, function (e, r, body) {
			    callback({success: true, message: 'Successfully Updated the user!'});	
			});
			
		} else {
			callback({success: false , message: 'Please Call .init({api_token: <your api token>})' })
		}
	},

	new_event: function(data,callback = function() {}){
		if(typeof two_hands_keys !== 'undefined'){
			const two_hands_api_token =  two_hands_keys.api_token;

			data['auth_token'] = two_hands_api_token;

			request.post({ url: 'http://localhost:3000/api/events/track', form: data, headers: {'Content-Type': 'application/json'} }, function (e, r, body) {
			    callback({success: true, message: 'Successfully Updated the Event!'});	
			});
			
		} else {
			callback({success: false , message: 'Please Call .init({api_token: <your api token>})' })
		}
	},

	init: function(data){
		global.two_hands_keys = data;
	}
}