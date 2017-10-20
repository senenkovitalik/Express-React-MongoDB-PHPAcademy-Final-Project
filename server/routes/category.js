var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const categorySchema = require('../db/schemas/category');
const Category = mongoose.model('Category', categorySchema);

router.route("/")
  .post((req, res) => {
    const arr = req.body.prodProps.map(val => val);
    const catToSave = new Category({
      name: req.body.name,
      description: req.body.description,
      prodProps: arr
    });

    catToSave.save(err => {
      if (err)  {
        console.log(err);
        res.json({result: false});
      } else {
        res.json({result: true});
      }
    });
  })
  .put((req, res) => {
    const arr = req.body.prodProps.map(val => val);
    const catToUpdate = {
      name: req.body.name,
      description: req.body.description,
      prodProps: arr
    };

    Category.findByIdAndUpdate({ _id: req.body._id }, catToUpdate, function(err) {
      if (err) {
        console.log(err);
        res.json({result: false});
      } else {
        res.json({result: true});
      }
    });
});

router.route('/all')
  .get((req, res) => {
    Category.find(function(err, cats) {
      if (err) res.json(err);
      res.json(cats);
    });
});

router.route('/:name')
  .delete((req, res) => {
    Category.remove({ name: req.params.name }, function(err) {
      if (err) {
        console.log(err);
        res.json({result: false});
      } else {
        res.json({result: true});
      }
    })
});

module.exports = router;