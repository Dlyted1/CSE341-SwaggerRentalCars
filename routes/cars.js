const express = require('express');
const router = express();
const carsController = require('../controllers/cars');
const validation = require('../middleware/validate');

router.get('/', carsController.getAll);

router.get('/:id', carsController.getCar);

router.get('/:status', carsController.getCarByStatus);

router.get('/:tag', carsController.getCarByTag);

router.post('/', carsController.createCar);

router.put('/:id', carsController.updateCar);

router.delete('/:id', carsController.deleteCar);

module.exports = router