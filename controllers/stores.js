const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;// Id mongo assigns all database entries (primary key)

let err;

const getAll = (req, res) => {
  // swagger.tags=['stores']
  /*
    #swagger.description = 'Returns all stores in the database.';
    */
  mongodb
    .getDb()
    .db()
    .collection('stores')
    .find()
    .toArray((err, result) => {
      if (err) {
        res.status(400).json({ message: err });
      };
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result);
    });
};


const getSingle = (req, res) => {
  // swagger.tags=['stores']
  /*
    #swagger.description = 'Returns a store from the database using the stores ID number';
    */
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid store.');
  }
  const storeId = new ObjectId(req.params.id);
  mongodb
    .getDb()
    .db()
    .collection('stores')
    .find({ _id: storeId })
    .toArray((err, result) => {
      if (err) {
        res.status(400).json({ message: err });
      };
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result[0]);
    });
};



module.exports = {
  getAll,
  getSingle,
  // createStore,
  // updateStore,
  // deleteStore
}
