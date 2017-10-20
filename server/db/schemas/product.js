var mongoose = require('mongoose');

var product = mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  model: { type: String, required: true },
  vendor: { type: String, default: '' },
  provider: { type: String, default: '' },
  description: { type: String, default: '' },
  price: { type: Number, required: true },
  imgs: [String],
  prodProps: mongoose.Schema.Types.Mixed
}, { strict: false });

module.exports = product;