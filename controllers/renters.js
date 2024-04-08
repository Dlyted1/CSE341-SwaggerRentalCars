const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;// Id mongo assigns all database entries (primary key)

let err;

const getAll = async (req, res) => {
  // #swagger.tags=['Renters']
  /*
    #swagger.description = 'Returns all renters in the database.';
    */
  const result = await mongodb.getDb()
    .db()
    .collection('renters')
    .find();
  result.toArray().then((renters) => {
    res.setHeader('Content-Type', "application/json");
    res.status(200).json(renters);
  });
};


const getRenter = async (req, res) => {
  // #swagger.tags=['Renters']
  /*
    #swagger.description = 'Returns a Renters from the database using the renters ID number';
    */
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid renter id.')
  }
  const renterId = new ObjectId(req.params.id)
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid renter id.')
  }
  const result = await mongodb.getDb().db().collection('renters').find({ _id: renterId });
  result.toArray().then((renter) => {
    res.setHeader('Content-Type', "application/json");
    res.status(200).json(renter[0]);
  });
};

const createRenter = async (req, res) => {
  // #swagger.tags=['Renters']
  /*
    #swagger.description = 'Create a renter in the database, every field is required. The renter ID number is automatically assigned by the database after submition.
    Any field that is ommitted will be set to "NULL"';
    */
  const renter_record = {
    renterFName: req.body.renterFName,
    renterLName: req.body.renterLName,
    renterEmail: req.body.renterEmail,
    renterRentals: body.renterRentals,
    renterDate: body.renterDate,
    renterDateOfReturn: body.renterDateOfReturn
  }
  const response = await mongodb.getDb().db().collection('renters').insertOne(renter_record)
  if (response.acknowledged) {
    res.status(204).send()
  } else {
    res.status(500).json(response.error || 'An error occured while creating the renter record.')
  };

};

const updateRenter = async (req, res) => {
  // #swagger.tags=['Renters']
  /*
    #swagger.description = 'Update a renter in the database, every field is required. Any field that is ommitted will be set to "NULL"';
    */
  const renterId = new ObjectId(req.params.id);
  const renter = {
    renterFName: req.body.renterFName,
    renterLName: req.body.renterLName,
    renterEmail: req.body.renterEmail
  };
  const response = await mongodb.getDatabase().db().collection('renters').updateOne({ _id: renterId }, renter);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  }
  else {
    res.status(500).json(response.error || 'Some error occured while updating the renter information');

  }
};

const deleteRenter = async (req, res) => {
  // #swagger.tags=['Renters']
  /*
    #swagger.description = 'Delete a renter from the database.;
    */
  const renterId = new ObjectId(req.params.id);
  const response = await mongodb.getDatabase().db().collection('renters').deleteOne({ _id: renterId });
  if (response.deleteCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occured while deleting the renter information.');
  }
};


module.exports = {
  getAll,
  getRenter,
  createRenter,
  updateRenter,
  deleteRenter, 
}
