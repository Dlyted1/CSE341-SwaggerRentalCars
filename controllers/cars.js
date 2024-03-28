const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId ;// Id mongo assigns all database entries (primary key)

let err;

const getAll = (req, res) => {
  // swagger.tags=['cars']
  /*
    #swagger.description = 'Returns all cars in the database.';
    */
    mongodb
    .getDatabase()
    .db()
    .collection('cars')
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
  // swagger.tags=['cars']
  /*
    #swagger.description = 'Returns a contact from the database using the cars ID number';
    */
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid contact id to find a contact.');
    }
    const contactId = new ObjectId(req.params.id);
    mongodb
      .getDatabase()
      .db()
      .collection('cars')
      .find({ _id: contactId })
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
    createCar,
    updateCar,
    deleteCar
  }
  