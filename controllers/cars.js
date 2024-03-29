const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;// Id mongo assigns all database entries (primary key)

let err;

const getAll = (req, res) => {
  // swagger.tags=['cars']
  /*
    #swagger.description = 'Returns all cars in the database.';
    */
  mongodb
    .getDb()
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


const getCar = (req, res) => {
  // swagger.tags=['cars']
  /*
    #swagger.description = 'Returns a car from the database using the cars ID number';
    */
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid car id.');
  }
  const carId = new ObjectId(req.params.id);
  mongodb
    .getDb()
    .db()
    .collection('cars')
    .find({ _id: carId })
    .toArray((err, result) => {
      if (err) {
        res.status(400).json({ message: err });
      };
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result[0]);
    });
};

const getCarByTag = (req, res) => {
  // swagger.tags=['cars']
  /*
    #swagger.description = 'Returns a car from the database using the cars tag number';
    */
  if (!ObjectId.isValid(req.params.tag)) {
    res.status(400).json('Must use a valid car id.');
  }
  const carTag = new ObjectId(req.params.tag);
  mongodb
    .getDb()
    .db()
    .collection('cars')
    .find({ _tag: carTag })
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
  getCar,
  getCarByTag,
  // createCar,
  // updateCar,
  // deleteCar
}
