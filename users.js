"use strict";

var request = require('request');

function User(){

	this.new_user = function(data,callback = function() {} ) {
		data['auth_token'] = this.api_token
		request.post({ url: 'http://localhost:3000/api/users/track', form: data, headers: {'Content-Type': 'application/json'} }, function (e, r, body) {
		    callback({success: true, message: 'Successfully Updated the user!'});	
		});
	};
	
	return this;
};


module.exports = User;


