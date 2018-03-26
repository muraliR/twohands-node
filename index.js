"use strict";



function TwohandsClient(args){
	this.api_token = args['api_token'];
}


TwohandsClient.prototype.User = require('./users');

TwohandsClient.prototype.Event = require('./events');

module.exports = TwohandsClient;
