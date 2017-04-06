// read data from JSON file
// **This step is being done for confidentiality purposes**
// For access to the actual file, please email David DeRemer at david@goposse.com
// If you have "posse_challenge.json" file on hand, simply drag and drop the file into the root directory and follow the instructions in the README

var fs = require('fs');
var file = fs.readFileSync('posse_challenge.json');
var data = JSON.parse(file);

module.exports = data;
