const carsController = require('../controllers/cars');
const validation = require('../middleware/validate');

router.get('/', carsController.getAll);

router.get('/:id', carsController.getSingle);


module.exports = router