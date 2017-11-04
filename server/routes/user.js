const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const userSchema = require('../db/schemas/user');
const User = mongoose.model('User', userSchema);

const checkAuth = (req, res, next) => {
  if (req.session.user.role !== 'admin' && req.session.user.role !== 'user') {
    console.log('Check auth: ', req.session.user);
    res.status(403).end();
  } else {
    next();
  }
};

router.route('/all')
  .get(checkAuth, (req, res) => {
    User.find({}, (err, docs) => {
      if (err) {
        console.log(err);
        res.json({ result: false, message: err });
      } else {
        res.json({ result: true, users: docs });
      }
    });
  });

router.route('/signup')
  .post((req, res) => {
    const userObj = Object.assign({}, req.body, { role: 'user' });
    const user = new User(userObj);
    user.save(err => {
      if (err) {
        console.log(err);
        res.json({ result: false, message: err });
      } else {
        // set session.user
        req.session.user = userObj;
        res.json({ result: true, user: userObj });
      }
    });
  });

router.route('/login')
  .post((req, res) => {
    User.findOne({ login: req.body.login, password: req.body.password }, (err, user) => {
      if (err) {
        console.log(err);
        res.json({ result: false, user: { role: 'anonymous' }});
      } else {
        if (user) {
          req.session.user = user;
          console.log('Successfully logged: ', user);
          res.json({ result: true, user: user });
        } else {
          res.json({ result: false, user: { role: 'anonymous' }});
        }
      }
    });
  });

router.route('/logout')
  .post((req, res) => {
    const user = req.session.user;
    req.session.destroy(err => {
      if (err) console.log(err);
      console.log('Session destroyed for user: ', user);
      res.json({ result: true });
    });
  });

router.route('/')
  .post(checkAuth, (req, res) => {
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
  .put(checkAuth, (req, res) => {
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
    .delete(checkAuth, (req, res) => {
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