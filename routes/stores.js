const storesController = require('../controllers/stores');
const validation = require('../middleware/validate');

router.get('/', storesController.getAll);

router.get('/:id', storesController.getSingle);


module.exports = router