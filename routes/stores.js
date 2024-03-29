const express = require('express');
const router = express();
const storesController = require('../controllers/stores');
const validation = require('../middleware/validate');

router.get('/', storesController.getAll);

router.get('/:id', storesController.getStore);

router.post('/',  storesController.createStore);

router.put('/:id',  storesController.updateStore);

router.delete('/:id', storesController.deleteStore);

module.exports = router