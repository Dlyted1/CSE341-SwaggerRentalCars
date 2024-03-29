const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;// Id mongo assigns all database entries (primary key)

// let err;

const getAll = async (req, res) => {
  // swagger.tags=['cars']
  /*
    #swagger.description = 'Returns all cars in the database.';
    */
  const carResult = await mongodb
    .getDb()
    .db('Swagger_Rental_Cars')
    .collection('cars')
    .find()
  carResult.toArray((err, lists) => {
    if (err) {
      res.status(400).json({ message: err });
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};


const getCar = async (req, res) => {
  // swagger.tags=['cars']
  /*
    #swagger.description = 'Returns a car from the database using the cars ID number';
    */
  if (!ObjectId.isValid(req.params.id)) {
    res.status(400).json('Must use a valid car id.');
  }
  const carId = new ObjectId(req.params.id);
  const carResult = await mongodb
    .getDb()
    .db('Swagger_Rental_Cars')
    .collection('cars')
    .find({ _id: carId })
  // .toArray((err, result) => {
  //   if (err) {

  carResult.toArray().then((lists) => {
    // res.status(400).json({ message: err });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
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
    .db('Swagger_Rental_Cars')
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

const createCar = async (req, res) => {
  const car = {
    carMake: req.body.make,
    carModel: req.body.model,
    carYear: req.body.year
  };

  try {
    const response = await mongodb
      .getDb()
      .db('Swagger_Rental_cars')
      .collection('cars')
      .insertOne(car);

    if (response.acknowledged && response.ops && response.ops.length > 0) {
      // Check if response.ops exists and has at least one element

      // Respond with the created horse data
      res.status(201).json(response.ops[0]); // ops contains the inserted document(s)
    } else {
      res.status(500).json('Some error occurred while creating the horse profile.');
    }
  } catch (error) {
    console.error("Error creating horse:", error); // Log the error to console
    res.status(500).json('Some error occurred while creating the horse profile.');
  }
};


module.exports = {
  getAll,
  getCar,
  getCarByTag,
  createCar
  // updateCar,
  // deleteCar
}
