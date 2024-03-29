const carsController = require('../controllers/cars');
const validation = require('../middleware/validate');

router.get('/', carsController.getAll);

router.get('/:id', carsController.getCar);

router.get('/:tag', carsController.getCarByTag);

router.post('/', validation.saveCar, carsController.createCar);

router.put('/:id', validation.saveCar, carsController.updateCar);

router.delete('/:id', carsController.deleteCar);

module.exports = router