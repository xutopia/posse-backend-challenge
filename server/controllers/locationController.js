// contoller for location queries to mongoDB
var Location = require('../../db/models/location');
var Q = require('q');

var fetchLocations = Q.nbind(Location.find, Location);

module.exports = {
  fetch: function(req, res, next) {
    fetchLocations({}, '-_id -__v')
    .then(function(locations) {
      res.json(locations);
    })
    .fail(function(err) {
      next(err);
    });
  }
};
