const express = require('express');
const router = express();
const carsController = require('../controllers/cars');
const validation = require('../middleware/validate');

router.get('/', carsController.getAll);
router.get('/:id', carsController.getCar);
router.get('/:status', carsController.getCarByStatus);
router.get('/:tag', carsController.getCarByTag);


// Define routes with authentication middleware when added

// router.post('/', isAuthenticated, validation.saveCar, carsController.createCar);
// router.put('/:id', isAuthenticated, validation.saveCar, carsController.updateCar);
// router.delete('/:id', isAuthenticated, carsController.deleteCar);

router.post('/', validation.saveCar, carsController.createCar);
router.put('/:id', validation.saveCar, carsController.updateCar);
router.delete('/:id', carsController.deleteCar);


module.exports = router