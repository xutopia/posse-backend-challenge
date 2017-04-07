// routes file
var locationController = require('../controllers/locationController');

module.exports = function(app) {
  app.get('/data', function(req, res) {
    var a = {
	_id: '12',
	c: 13,
	e: [{
		ags: 'maybe',
		bags: 'yes'
	},
	{
		ags: 'maybe',
		bags: 'yes'
	}
	]
};

var b = {
	_id: 'w2',
	c: 10,
	e: [{
		ags: 'no',
		bags: 'yes'
	},
	{
		ags: 'no',
		bags: 'yes'
	}
	]
};

var d = [a, b];

console.log('original', d[0].e);
d.forEach(function(thing) {
	delete thing._id;
	thing.e.forEach(function(obj) {
		delete obj.ags;
	});
});
console.log('new', d[0].e, d[1].e);
    locationController.fetch(req, res);
  });
};
