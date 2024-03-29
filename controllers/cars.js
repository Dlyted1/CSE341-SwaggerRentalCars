const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;// Id mongo assigns all database entries (primary key)

let err;

const getAll = async (req, res) => {
  // swagger.tags=['cars']
  /*
    #swagger.description = 'Returns all cars in the database.';
    */
    const result = await mongodb.getDb()
    .db()
    .collection('cars')
    .find();
    result.toArray().then((cars) => {
      res.setHeader('Content-Type', "application/json");
      res.status(200).json(cars);
    });
  };

const getCar = async (req, res) => {
  // swagger.tags=['cars']
  /*
    #swagger.description = 'Returns a car from the database using the cars ID number';
    */
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid car id.')
    }
    const carId = new ObjectId(req.params.id)
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid car id.')
    }
    const result = await mongodb.getDb().db().collection('cars').find({ _id: carId });
    result.toArray().then((car) => {
     res.setHeader('Content-Type', "application/json");
     res.status(200).json(car[0]);
    });
  };

const getCarByTag = async (req, res) => {
  // swagger.tags=['cars']
  /*
    #swagger.description = 'Returns a car from the database using the cars tag number';
    */
    if (!ObjectId.isValid(req.params.tag)) {
      res.status(400).json('Must use a valid car id.')
    }
    const carTag = new ObjectId(req.params.tag)
    if (!ObjectId.isValid(req.params.tag)) {
      res.status(400).json('Must use a valid car id.')
    }
    const result = await mongodb.getDb().db().collection('cars').find({ _id: carTag });
    result.toArray().then((car) => {
     res.setHeader('Content-Type', "application/json");
     res.status(200).json(car[0]);
    });
  };
  
  const getCarByStatus = async (req, res) => {
    // swagger.tags=['cars']
    /*
      #swagger.description = 'Returns a car from the database using the cars tag number';
      */
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid car id to get car status.')
      }
      const carTag = new ObjectId(req.params.tag)
      if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid car id to get car status.')
      }
      const result = await mongodb.getDb().db().collection('cars').find({ _id: carTag });
      result.toArray().then((car) => {
       res.setHeader('Content-Type', "application/json");
       res.status(200).json(car[0]);
      });
    };

const createCar = async (req, res) => {
  // swagger.tags=['cars']
  /*
    #swagger.description = 'Create a car in the database, every field is required. The car ID number is automatically assigned by the database after submition.
    Any field that is ommitted will be set to "NULL"';
    */
  const car = {
    carMake: req.body.carMake,
    carModel: req.body.carModel,
    carYear: req.body.carYear,
    carTag: req.body.carTag,
    carStatus: req.body.carStatus,
  }
  const response = await mongodb.getDb().db().collection('cars').insertOne(car)
  if (response.acknowledged) {
    res.status(204).send()
  } else {
    res.status(500).json(response.error || 'An error occured while creating the car.')
  };
}

const updateCar = (req, res) => {
  pass
}

const deleteCar = (req, res) => {
  pass
}


module.exports = {
  getAll,
  getCar,
  getCarByTag,
  getCarByStatus,
  createCar,
  updateCar,
  deleteCar
}
