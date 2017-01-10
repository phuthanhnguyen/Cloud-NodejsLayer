"use strict";
var request = require('superagent');

exports.signup = function(req, res) {
	var json = JSON.stringify(req.body);
	console.log(json);
	request
	   .post('http://10.32.0.206:8000/authentication/signUp/')
	   .set('Accept', 'application/json')
	   .send(json)
	   .end(function(err, response){
	   		console.log(response);
	     	res.json(response.body);
	   });
};