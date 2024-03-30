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
  
  const updateStore = async  (req, res) => {
    //pass
 
    
    const storeId = new ObjectId(req.params.id);
    const store = {
    
      storeName: req.body.storeName

        
    
  };
    const response = await mongodb.getDatabase().db().collection('stores').replaceOne({_id: storeId} , store);
    if(response.modifiedCount > 0){
        res.status(204).send();
    }
    else{
        res.status(500).json(response.error || 'Some error occured while updating the store information');
    
    }
    
  
  
  };
  
  const deleteStore = async (req, res) => {
   //pass

   const storeId = new ObjectId(req.params.id);
   const result = await mongodb.getDatabase().db().collection('stores').deleteOne({_id: storeId});
   if (response.deleteCount > 0){
       res.status(204).send();
   }else {
       res.status(500).json(response.error || 'Some error occured while deleting the store information.');
   }
   
  
  };



module.exports = {
  getAll,
  getStore,
  createStore,
  updateStore,
  deleteStore
}
