const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const orderSchema = require('../db/schemas/order');
const Order = mongoose.model('Order', orderSchema);

router.route('/')
  .get((req, res) => {
    Order.find({}, (err, orders) => {
      if (err) {
        console.log(err);
        res.json({ result: false });
      } else {
        if (orders.length !== 0) {
          res.json({ result: true, orders: orders });
        } else {
          res.json({ result: false });
        }
      }
    });
  })
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

router.route('/:id')
  .delete((req, res) => {
    Order.findByIdAndRemove(req.params.id, err => {
      console.log(req.params.id);
      if (err) {
        console.error(err);
        res.json({ result: false });
      } else {
        res.json({ result: true });
      }
    })
  });
module.exports = router;