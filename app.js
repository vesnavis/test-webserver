'use strict';

var express = require('express');
var app = express();
var path = require('path');


app.get('/', function(req, res) {
    res.sendFile(__dirname+'/index.html');
});

console.log('startovana');


var counter=0;


app.get('/counter',function(req, res){
	res.send({counter:counter});
});


app.post('/counter/increase', function(req, res){
	counter++;
	res.end();
});

app.listen(8000);


