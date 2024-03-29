const express = require('express');
const router = express();
const rentersController = require('../controllers/renters');
const validation = require('../middleware/validate');

router.get('/', rentersController.getAll);

router.get('/:id', rentersController.getRenter);

router.post('/', rentersController.createRenter);

router.put('/:id',  rentersController.updateRenter);

router.delete('/:id', rentersController.deleteRenter);

module.exports = router