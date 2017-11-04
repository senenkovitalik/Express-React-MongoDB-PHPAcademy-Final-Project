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

    order.save(err => {
      if (err) {
        console.error(err);
        res.json({ result: false });
      } else {
        res.json({ result: true });
      }
    });
  });

router.route('/:username')
  .get((req, res) => {
    Order.find({ name: req.params.username }, (err, docs) => {
      if (err) {
        console.error(err);
        res.json({ result: false });
      } else if (docs.length > 0) {
        res.json({ result: true, orders: docs });
      } else {
        res.json({ result: false });
      }
    })
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

router.route('/:id/:status')
  .put((req, res) => {
    const id = req.params.id;
    const status = req.params.status;

    Order.findByIdAndUpdate(id, { status: status }, err => {
      if (err) {
        console.error(err);
        res.json({ result: false });
      } else {
        res.json({ result: true });
      }
    });
  });

module.exports = router;