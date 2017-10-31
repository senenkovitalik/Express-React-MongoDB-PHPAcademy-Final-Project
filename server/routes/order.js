const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const orderSchema = require('../db/schemas/order');
const Order = mongoose.model('Order', orderSchema);

router.route('/')
  .post((req, res) => {
    const order = new Order(req.body);

    console.log('\n', order);

    order.save(err => {
      if (err) {
        console.error(err);
        res.json({ result: false });
      } else {
        res.json({ result: true });
      }
    });
  });

module.exports = router;