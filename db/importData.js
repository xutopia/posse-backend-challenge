// Import data into mongoDB
require('dotenv').config();
var mongoose = require('mongoose');
var data = require('./dataManipulation/readData');
var Location = require('./models/location');

var mongoURI = process.env.mongoURI;
mongoose.connect(mongoURI);
var db = mongoose.connection;

// check for any errors on connection
db.on('error', console.error.bind(console, 'connection error:'));

// on open of the connection, import the data
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
