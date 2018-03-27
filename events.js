"use strict";

var request = require('request');

function Event(){

	this.create = function(data,callback = function() {} ) {
		data['auth_token'] = this.api_token;

		request.post({ url: 'http://localhost:3000/api/events/track', form: data, headers: {'Content-Type': 'application/json'} }, function (err, response, body) {
		    if(err)	{
				console.error('Error connecting Twohands Server!');
				callback({success: false, message: 'Error connecting Twohands Server!'})
			} else {
				if(response.statusCode == 200){
					callback({success: true, message: 'Successfully Updated the Event!'});			
				} else if (response.statusCode == 422){
					console.error(JSON.parse(body).error);
					callback({success: false, message: JSON.parse(body).error});			
				} else {
					console.error('Oops Something went wrong!!');
					callback({success: false, message: 'Oops Something went wrong!!'});			
				}
			}
		});
	};
	
	return this;
};


module.exports = Event;


