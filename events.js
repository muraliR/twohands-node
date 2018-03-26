"use strict";

var request = require('request');

function Event(){

	this.new_event = function(data,callback = function() {} ) {
		data['auth_token'] = this.api_token;

		request.post({ url: 'http://localhost:3000/api/events/track', form: data, headers: {'Content-Type': 'application/json'} }, function (e, r, body) {
		    callback({success: true, message: 'Successfully Updated the Event!'});	
		});
	};
	
	return this;
};


module.exports = Event;


