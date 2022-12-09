import { Router } from 'express';
// This will help us connect to the database
import { getDb } from '../db/conn.js';
// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from 'mongodb';

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const productRoutes = Router();

// This section will help you get a list of all the records.
productRoutes.route('/product').get(function (req, res) {
  let db_connect = getDb();
  db_connect
    .collection('product')
    .find({})
    .toArray()
    .then((product) => console.log(product));
});

// This section will help you get a single record by id
productRoutes.route('/record/:id').get(function (req, res) {
  let db_connect = getDb();
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect.collection('records').findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

// This section will help you create a new record.
productRoutes.route('/product/add').post(function (req, response) {
  let db_connect = getDb();
  let myobj = {
    name: 'testname', //req.body.name,
    position: 'testposition', //req.body.position,
    level: 'testlevel', //req.body.level,
  };
  db_connect
    .collection('product')
    .insertOne(myobj)
    .then((returnvalue) => response.json(returnvalue));
});

// This section will help you update a record by id.
productRoutes.route('/update/:id').post(function (req, response) {
  let db_connect = getDb();
  let myquery = { _id: new ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };
  db_connect
    .collection('records')
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log('1 document updated');
      response.json(res);
    });
});

// This section will help you delete a record
productRoutes.route('/:id').delete((req, response) => {
  let db_connect = getDb();
  let myquery = { _id: new ObjectId(req.params.id) };
  db_connect.collection('records').deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log('1 document deleted');
    response.json(obj);
  });
});

export default productRoutes;
