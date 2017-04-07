// contoller for location queries to mongoDB
var Location = require('../../db/models/location');
var util = require('../util');
var Q = require('q');

var fetchLocations = Q.nbind(Location.find, Location);

module.exports = {
  fetch: function(req, res, next) {
    fetchLocations({}, '-_id -__v')
    .then(function(locations) {
      var locationsWithoutId = util.removeIdField(locations);
      console.log('here is the locationsWithoutId', locationsWithoutId);
      res.json(locationsWithoutId);
    })
    .fail(function(err) {
      next(err);
    });
  }
};
