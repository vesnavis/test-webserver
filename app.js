'use strict';

var express = require('express');
var app = express();
var path = require('path');


app.get('/', function(req, res) {
    res.sendFile('./index.html');
});

app.listen(8000);
console.log('startovana');