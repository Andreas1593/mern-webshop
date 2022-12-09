"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mongodb_1 = require("mongodb");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const conn_1 = require("../db/conn");
const productRoutes = (0, express_1.Router)();
const upload = (0, multer_1.default)({
    dest: 'uploads/',
    fileFilter: (req, file, cb) => {
        var ext = path_1.default.extname(file.originalname);
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
    if (!mongodb_1.ObjectId.isValid(req.params.id)) {
        res.sendStatus(404);
        console.log('run');
        return;
    }
    let db_connect = (0, conn_1.getDb)();
    let myquery = { _id: new mongodb_1.ObjectId(req.params.id) };
    db_connect
        .collection('product')
        .findOne(myquery)
        .then((product) => {
        res.json(product);
    });
});
// Get all products
productRoutes.route('/admin/product').get((req, res) => {
    let db_connect = (0, conn_1.getDb)();
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
        if (err instanceof multer_1.default.MulterError) {
            res.status(400).send();
        }
        else if (err) {
            res.status(415).send();
        }
        else {
            let db_connect = (0, conn_1.getDb)();
            const newProduct = Object.assign(Object.assign({}, req.body), { images: req.files });
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
        if (err instanceof multer_1.default.MulterError) {
            res.status(400).send();
        }
        else if (err) {
            res.status(415).send();
        }
        else {
            const oldImages = JSON.parse(req.body.images);
            const newImages = req.files;
            const images = oldImages.concat(newImages);
            const product = Object.assign(Object.assign({}, req.body), { images: images });
            let oldProduct = { _id: new mongodb_1.ObjectId(req.params.id) };
            let db_connect = (0, conn_1.getDb)();
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
    let db_connect = (0, conn_1.getDb)();
    let myquery = { _id: new mongodb_1.ObjectId(req.params.id) };
    db_connect
        .collection('product')
        .deleteOne(myquery)
        .then((response) => {
        res.json(response);
    });
});
exports.default = productRoutes;
