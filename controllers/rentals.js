const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;// Id mongo assigns all database entries (primary key)

let err;

const getAll = async (req, res) => {
  // #swagger.tags=['rentals']
  /*
    #swagger.description = 'Returns all rentals in the database.';
    */
  const result = await mongodb.getDb()
    .db()
    .collection('renters')
    .find({renterRentals: "" != undefined || null || ''});
  result.toArray().then((rentals) => {
    res.setHeader('Content-Type', "application/json");
    res.status(200).json(rentals);
  });
};


const getRental = async (req, res) => {
  // #swagger.tags=['rentals']
  /*
    #swagger.description = 'Returns Rentals from the database using the renter ID number';
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

const createRental = async (req, res) => {
    // #swagger.tags=['rentals']
    /*
      #swagger.description = 'Create a rental in the database, every field is required. The renter ID number is automatically assigned by the database after submition if 
      it doesn't already exist.
      Any field that is ommitted will be set to "NULL"';
      */
    const rental_record = {
        renterFName: req.body.renterFName,
        renterLName: req.body.renterLName,
        renterEmail: req.body.renterEmail,
        renterRentals: req.body.renterRentals,
        renterDate: req.body.renterDate,
        renterDateOfReturn: req.body.renterDateOfReturn
    }
    const response = await mongodb.getDb().db().collection('renters').insertOne(rental_record)
    if (response.acknowledged) {
      res.status(204).send()
    } else {
      res.status(500).json(response.error || 'An error occured while creating the rental record.')
    };
  
  };
  
  const updateRental = async (req, res) => {
    // #swagger.tags=['rentals']
    /*
      #swagger.description = 'Update a rental in the database, every field is required. Renter ID is used to update the rental information Any field that is ommitted will be set to "NULL"';
      */
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid Renters ID.')
      }
      const renterID = new ObjectId(req.params.id)
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid Renter ID.')
      }
    const renterId = new ObjectId(req.params.id);
    const rental = {
      renterRentals: req.body.renterRentals,
      renterDate: req.body.renterDate,
      renterDateOfReturn: req.body.renterDateOfReturn
    };
    const response = await mongodb.getDatabase().db().collection('renters').updateOne({ _id: renterId }, rental);
    if (response.modifiedCount > 0) {
      res.status(204).send();
    }
    else {
      res.status(500).json(response.error || 'Some error occured while updating the rental information');
  
    }
  };

  const deleteRental = async (req, res) => {
    // #swagger.tags=['rentals']
    /*
      #swagger.description = 'Delete a rental from the database. Insert a valid Renter ID to delete a rental from the database;
      */
    const renterId = new ObjectId(req.params.renterLName);
    const response = await mongodb.getDatabase().db().collection('renters').updateOne({ renterLName: renterId });
    if (response.deleteCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json(response.error || 'Some error occured while deleting the rental information.');
    }
  };
  
  
  
  module.exports = {
    getAll,
    getRental,
    createRental,
    updateRental,
    deleteRental
  }
  