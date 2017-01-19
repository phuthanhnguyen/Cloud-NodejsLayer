"use strict";
var request = require('superagent');

exports.getContainer = function(req, res) {
	var json = JSON.stringify(req.body);
	console.log(json);
	request
	   //.post('http://213.32.27.235:8000/containers/')
	   .post('http://213.32.27.235:8000/containers/')
	   .set('Accept', 'application/json')
	   .send(json)
	   .end(function(err, response){
	   		console.log(response.body);
	   		//res.send(200);
	     	res.json(response.body);
	   });
};