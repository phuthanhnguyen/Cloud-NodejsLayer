"use strict";
var request = require('superagent');

exports.login = function(req, res) {
	var json = JSON.stringify(req.body);
	console.log(json);
	request
	   //.post('http://213.32.27.235:8000/authentication/login/')
	   .post('http://213.32.27.235:8000/authentication/login/')
	   .set('Accept', 'application/json')
	   .send(json)
	   .end(function(err, response){
	   		if (response != undefined)
	     		res.json(response.body);
	   });
};
