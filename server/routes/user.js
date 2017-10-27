const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const userSchema = require('../db/schemas/user');
const User = mongoose.model('User', userSchema);

router.route('/all')
  .get((req, res) => {
    User.find({}, (err, docs) => {
      if (err) {
        console.log(err);
        res.json({ result: false, message: err });
      } else {
        res.json({ result: true, users: docs });
      }
    });
  });

router.route('/')
  .post((req, res) => {
    const user = new User(req.body);
    user.save(req.body, (err, user) => {
      if (err) {
        console.log(err);
        res.json({ result: false, message: err });
      } else {
        res.json({ result: true, user: user });
      }
    });
  })
  .put((req, res) => {
    User.findByIdAndUpdate(req.body._id, req.body, err => {
      if (err) {
        console.log(err);
        res.json({ result: false, message: err });
      } else {
        res.json({ result: true });
      }
    })
  });

router.route('/:id')
    .delete((req, res) => {
        User.findByIdAndRemove(req.params.id, function(err) {
            if (err) {
                console.log(err);
                res.json({result: false, message: err});
            } else {
                res.json({result: true});
            }
        })
    });

module.exports = router;