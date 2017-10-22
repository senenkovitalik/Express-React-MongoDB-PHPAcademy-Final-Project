var mongoose = require('mongoose');

var prodProps = mongoose.Schema({
  name: { type: String, required: true },
  value: { type: String, default: '' }
});

var product = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  model: { type: String, required: true },
  vendor: { type: String, default: '' },
  provider: { type: String, default: '' },
  description: { type: String, default: '' },
  price: { type: Number, required: true },
  imgs: [String],
  prodProps: [prodProps]
}, { strict: false });

module.exports = product;