var mongoose = require('mongoose');

var properties = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true }
});

var category = mongoose.Schema({
  name: { type: String, required: true },
  subcategories: [{ type: String, required: true }],
  description: { type: String, default: '' },
  prodProps: [properties]
});

module.exports = category;