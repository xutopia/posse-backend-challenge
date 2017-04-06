// Import data into mongoDB
require('dotenv').config();
var mongoose = require('mongoose');
var data = require('./dataManipulation/readData');
var Location = require('./models/location');

var mongoURI = process.env.mongoURI;
console.log('here is the URI', mongoURI);
mongoose.connect(mongoURI);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var locations = data.response.locations;

  Location.create(locations)
  .then(function(locations) {
    console.log('success!');
  })
  .catch(function(err) {
    console.error(err);
  })
})
