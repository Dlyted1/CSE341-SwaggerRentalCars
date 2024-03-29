const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;// Id mongo assigns all database entries (primary key)

let err;

const getAll = async (req, res) => {
  // swagger.tags=['stores']
  /*
    #swagger.description = 'Returns all stores in the database.';
    */
    const result = await mongodb.getDb()
    .db()
    .collection('stores')
    .find();
    result.toArray().then((stores) => {
      res.setHeader('Content-Type', "application/json");
      res.status(200).json(stores);
    });
  };


const getStore = async (req, res) => {
  // swagger.tags=['stores']
  /*
    #swagger.description = 'Returns a store from the database using the stores ID number';
    */
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid store id.')
    }
    const storeId = new ObjectId(req.params.id)
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid store id.')
    }
    const result = await mongodb.getDb().db().collection('stores').find({ _id: storeId });
    result.toArray().then((store) => {
     res.setHeader('Content-Type', "application/json");
     res.status(200).json(store[0]);
    });
  };

  const createStore = (req, res) => {
    pass
  }
  
  const updateStore = (req, res) => {
    pass
  }
  
  const deleteStore = (req, res) => {
    pass
  }



module.exports = {
  getAll,
  getStore,
  createStore,
  updateStore,
  deleteStore
}
