var mongoose = require('mongoose');

var category = mongoose.Schema({
  name: String,
  description: String,
  prodProps: [{ name: String, value: String}]
});

module.exports = category;