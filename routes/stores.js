const storesController = require('../controllers/stores');
const validation = require('../middleware/validate');

router.get('/', storesController.getAll);

router.get('/:id', storesController.getSingle);

router.post('/', validation.saveStore, storesController.createStore);

router.put('/:id', validation.saveStore, storesController.updateStore);

router.delete('/:id', storesController.deleteStore);

module.exports = router