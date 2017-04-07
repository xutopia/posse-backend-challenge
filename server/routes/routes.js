// routes file
var locationController = require('../controllers/locationController');

module.exports = function(app) {
  app.get('/data', function(req, res) {
    // invoke the locationController that will make the query to fetch the data
    locationController.fetch(req, res);
  });
};
