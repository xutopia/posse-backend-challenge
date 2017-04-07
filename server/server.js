// Server file that will handle requests
require('dotenv').config();
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./routes/routes');

var app = express();
var port = 8080;
var mongoURI = process.env.mongoURI;
mongoose.connect(mongoURI);

app.use(bodyParser.json());
routes(app);

app.listen(port);
console.log('server running on port:', port);
