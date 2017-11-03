const mongoose = require('mongoose');

const order = mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  delivery: { type: String, required: true },
  address: { type: String },
  products: [{}],
  date: { type: Date, default: Date.now },
  status: { type: String, required: true }
  /*
  may be:
    1) pending
    2) in process
    3) delivering
    4) completed
    5) canceled
  */
});

module.exports = order;
