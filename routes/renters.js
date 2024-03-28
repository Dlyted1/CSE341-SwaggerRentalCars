const rentersController = require('../controllers/renters');
const validation = require('../middleware/validate');

router.get('/', rentersController.getAll);

router.get('/:id', rentersController.getSingle);


module.exports = router