const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');

const imagesPath = path.join(__dirname, '..', '..', '/static/img');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, imagesPath)
  },
  filename: function (req, file, cb) {
    const index = file.originalname.lastIndexOf(".");
    let name = '';
    if (index) {
      const ext = file.originalname.slice(index);
      name = file.originalname.slice(0, index) + '-' + Date.now() + ext;
    }
    cb(null, name)
  }
});

const upload = multer({
  storage: storage,
  fileFilter: function(req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    const fileTypes = [".jpg", ".jpeg", ".png", ".bmp"];
    if (fileTypes.indexOf(ext) !== -1) {
      return cb(null, true)
    }
  }
});

const productSchema = require('../db/schemas/product');
const Product = mongoose.model('Product', productSchema);

function removeImages(imgPath) {
  for (let p of imgPath) {
    fs.stat(p, function (err, stats) {
      if (err) {
        return console.error(err);
      }

      fs.unlink(p,function(err){
        if (err) return console.log(err);
      });
    });
  }
}

router.route('/')
  .post(upload.array("imgs", 10), (req, res) => {
    const prodObj = JSON.parse(req.body.product);
    const condition = {
      name: prodObj.name,
      category: prodObj.category,
      subcategory: prodObj.subcategory,
      model: prodObj.model
    };

    let remImg = false;

    Product.find(condition, (err, doc) => {
      if (err) {
        console.log(err);
        remImg = true;
      }
      if (doc.length === 0) {
        const imgArr = req.files.map(f => f.filename);
        const prodToSave = Object.assign({}, prodObj, { imgs: imgArr });
        const product = new Product(prodToSave);

        product.save(err => {
          if (err) {
            console.log(err);
            remImg = true;
            res.json({ result: false, message: "successfully saved" });
          } else {
            res.json({ result: true });
          }
        });
      } else {
        remImg = true;
        res.json({ result: false, message: "product already exist" });
      }


      if (remImg) {
        removeImages(req.files.map(f => f.path));
      }
    });
  })
  .put(upload.array('imgs', 10), (req, res) => {
    const prodObj = JSON.parse(req.body.product);
    const imgArr = req.files.map(f => f.filename);  // new files
    const prodToUpdate = Object.assign({}, prodObj, { imgs: imgArr.concat(prodObj.imgs)});

    // remove old images
    Product.find({ _id: prodObj._id }, (err, doc) => {
      const imgToDelete = _.xor(doc[0].imgs, prodObj.imgs);
      const imgToDeletex = imgToDelete.map(p => path.join(imagesPath, p));
      removeImages(imgToDeletex);
    });

    Product.findOneAndUpdate({ _id: prodObj._id }, prodToUpdate, (err) => {
      if (err) {
        console.log(err);
        // remove files that have been saved by multer
        removeImages(req.files.map(f => f.path));
        res.json({ result: false, message: 'Can\'t update product' });
      } else {
        res.json({ result: true, message: "Successfully updated" });
      }
    });
  })
  .delete((req, res) => {
    const prod = req.body;
    const condition = {
      name: prod.name,
      category: prod.category,
      subcategory: prod.subcategory,
      model: prod.model
    };

    const imgPath = req.body.imgs.map(
      p => path.join(__dirname, '..', '..', '/static/img', p)
    );

    Product.remove(condition, (err) => {
      if (err) {
        console.log(err);
        res.json({ result: false, message: "Server error" });
      } else {
        removeImages(imgPath);
        res.json({ result: true, message: "Product successfully removed" });
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

router.route('/:cat/:subcat')
  .get((req, res) => {
    Product.find({ category: req.params.cat, subcategory: req.params.subcat }, (err, doc) => {
      if (err) {
        console.log(err);
        return res.json({ result: false, message: 'Error during find process' });
      }
      if (doc.length !== 0) {
        res.json({ result: true, products: doc });
      } else {
        res.json({ result: false, message: 'No documents that math given condition' });
      }
    });
  });

module.exports = router;