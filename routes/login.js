"use strict";
var request = require('superagent');

exports.login = function(req, res) {
	var json = JSON.stringify(req.body);
	console.log(json);
	request
	   .post('http://10.32.0.206:8000/authentication/login/')
	   .set('Accept', 'application/json')
	   .send(json)
	   .end(function(err, response){
	   		console.log(response.body);
	   		//res.send(200);
	     	//res.json(response.body);
	   });
};
