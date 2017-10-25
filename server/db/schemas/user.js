const mongoose = require('mongoose');

const user = mongoose.Schema({
  name: { type: String, required: true },
  login: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, required: true }, // admin or user
  phone: { type: String, default: '' },
  email: { type: String, default: '' },
  address: { type: String, default: '' }
});

module.exports = user;