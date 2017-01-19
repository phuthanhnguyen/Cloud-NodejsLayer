"use strict";
var request = require('superagent');

exports.createContainer = function(req, res) {
	var json = JSON.stringify(req.body);
	console.log(json);
	request
	   //.post('http://213.32.27.235:8000/authentication/login/')
	   .post('http://213.32.27.235:8000/containers/create/')
	   .set('Accept', 'application/json')
	   .send(json)
	   .end(function(err, response){
	   		console.log(response);
	   		//res.send(200);
	     	res.json(response.body);
	   });
};

exports.stopContainer = function(req, res){
	var json = JSON.stringify(req.body);
	console.log(json);

	request
	   //.post('http://213.32.27.235:8000/authentication/login/')
	   .post('http://213.32.27.235:8000/containers/change/')
	   .set('Accept', 'application/json')
	   .send(json)
	   .end(function(err, response){
	   		console.log(response.body);
	   		//res.send(200);
	     	res.json(response.body);
	   });

}

exports.startContainer = function(req, res){
	var json = JSON.stringify(req.body);
	console.log(json);

	request
	   //.post('http://213.32.27.235:8000/authentication/login/')
	   .post('http://213.32.27.235:8000/containers/change/')
	   .set('Accept', 'application/json')
	   .send(json)
	   .end(function(err, response){
	   		console.log(response.body);
	   		//res.send(200);
	     	res.json(response.body);
	   });
}

exports.delContainer = function(req,res){
	var json = JSON.stringify(req.body);
	console.log(json);

	request
	   //.post('http://213.32.27.235:8000/authentication/login/')
	   .post('http://213.32.27.235:8000/containers/delete/')
	   .set('Accept', 'application/json')
	   .send(json)
	   .end(function(err, response){
	   		console.log(response.body);
	   		//res.send(200);
	     	res.json(response.body);
	   });
}

exports.backupContainer = function(req,res){
	var json = JSON.stringify(req.body);
	console.log(json);

	request
	   //.post('http://213.32.27.235:8000/authentication/login/')
	   .post('http://213.32.27.235:8000/containers/backup/')
	   .set('Accept', 'application/json')
	   .send(json)
	   .end(function(err, response){
	   		console.log(response.body);
	   		//res.send(200);
	     	res.json(response.body);
	   });
}