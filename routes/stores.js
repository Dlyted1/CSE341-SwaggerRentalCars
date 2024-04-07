const express = require('express');
const router = express();
const storesController = require('../controllers/stores');
const validation = require('../middleware/validate');

const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', storesController.getAll);
router.get('/:id', storesController.getStore);

router.post('/', isAuthenticated, validation.saveStore, storesController.createStore);
router.put('/:id', isAuthenticated, validation.saveStore, storesController.updateStore);
router.delete('/:id', isAuthenticated, storesController.deleteStore);


module.exports = router