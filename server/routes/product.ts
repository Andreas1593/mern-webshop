import { Router } from 'express';
import { ObjectId } from 'mongodb';
import multer from 'multer';
import path from 'path';

import { getDb } from '../db/conn';

const productRoutes = Router();

const upload = multer({
  dest: 'uploads/',
  fileFilter: (req, file, cb) => {
    var ext = path.extname(file.originalname);
    if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg' && ext !== '.gif') {
      return cb(new Error('Only images are allowed (PNG, JPG, JPEG, GIF)'));
    }
    cb(null, true);
  },
  limits: {
    fileSize: 1024 * 1024,
  },
});

// Get a product
productRoutes.route('/product/:id').get((req, res) => {
  if (!ObjectId.isValid(req.params.id)) {
    res.sendStatus(404);
    console.log('run');
    return;
  }

  let db_connect = getDb();
  let myquery = { _id: new ObjectId(req.params.id) };

  db_connect
    .collection('product')
    .findOne(myquery)
    .then((product) => {
      res.json(product);
    });
});

// Get all products
productRoutes.route('/admin/product').get((req, res) => {
  let db_connect = getDb();
  db_connect
    .collection('product')
    .find({})
    .toArray()
    .then((products) => {
      res.json(products);
    });
});

// Admin creating a new product
productRoutes.route('/admin/product/add').post((req, res) => {
  upload.array('images')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      res.status(400).send();
    } else if (err) {
      res.status(415).send();
    } else {
      let db_connect = getDb();

      const newProduct = { ...req.body, images: req.files };

      db_connect
        .collection('product')
        .insertOne(newProduct)
        .then((product) => {
          res.json(product);
        });
    }
  });
});

// Admin editing a product
productRoutes.route('/admin/product/:id').put((req, res) => {
  upload.array('newImages')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      res.status(400).send();
    } else if (err) {
      res.status(415).send();
    } else {
      const oldImages = JSON.parse(req.body.images);
      const newImages = req.files;
      const images = oldImages.concat(newImages);

      const product = {
        ...req.body,
        images: images,
      };
      let oldProduct = { _id: new ObjectId(req.params.id) };

      let db_connect = getDb();

      db_connect
        .collection('product')
        .replaceOne(oldProduct, product)
        .then((product) => {
          res.json(product);
        });
    }
  });
});

// Admin deleting a product
productRoutes.route('/admin/product/:id').delete((req, res) => {
  let db_connect = getDb();
  let myquery = { _id: new ObjectId(req.params.id) };

  db_connect
    .collection('product')
    .deleteOne(myquery)
    .then((response) => {
      res.json(response);
    });
});

export default productRoutes;
