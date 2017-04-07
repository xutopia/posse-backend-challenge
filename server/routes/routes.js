// routes file
var locationController = require('../controllers/locationController');

module.exports = function(app) {
  app.get('/data', function(req, res) {
    locationController.fetch(req, res);
  });
};
