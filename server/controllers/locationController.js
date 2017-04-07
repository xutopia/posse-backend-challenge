// contoller for location queries to mongoDB
var Location = require('../../db/models/location');
var Q = require('q');

var fetchLocations = Q.nbind(Location.find, Location);

module.exports = {
  fetch: function(req, res) {
    fetchLocations({}, '-_id -__v')
    .then(function(locations) {
      var data = {
        locations: locations
      }
      res.status(200).send(data);
    })
    .fail(function(err) {
      res.json(err);
    });
  }
};
