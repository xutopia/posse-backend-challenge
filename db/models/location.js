// mongoDB location model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a location schema
var locationSchema = new Schema({
  public_id: String,
  locality: String,
  region: String,
  postal_code: String,
  country: String,
  services: [{
    platform: String,
    _id: false,
    programmers: [{
      name: String,
      favorite_color: String,
      age: Number,
      weight: Number,
      phone: String,
      is_artist: Boolean,
      _id: false
    }]
  }]
})

var Location = mongoose.model('Location', locationSchema);

module.exports = Location;
