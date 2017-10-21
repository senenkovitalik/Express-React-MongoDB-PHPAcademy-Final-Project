const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', '..', '/static/img'))
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage });

const productSchema = require('../db/schemas/product');
const Product = mongoose.model('Product', productSchema);

router.route('/')
  .post(upload.array('imgs') , (req, res) => {

    const prodObj = JSON.parse(req.body.product);

    const condition = {
      name: prodObj.name,
      category: prodObj.category,
      model: prodObj.model
    };

    Product.find(condition, (err, doc) => {

      if (err) console.log(err);

      if (doc.length === 0) {
        const product = new Product(prodObj);
        product.save(err => {
          if (err) {
            console.log(err);
            res.json({ result: false });
          } else {
            res.json({ result: true });
          }
        });
      } else {
        res.json({ result: false });
      }
    });
  });

router.route('/all')
  .get((req, res) => {
    Product.find({}, (err, result) => {
      if (err) {
        console.log(err);
        res.json({ result: false })
      } else {
        res.json({ products: result });
      }
    });
  });

module.exports = router;