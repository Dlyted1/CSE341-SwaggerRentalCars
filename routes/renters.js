const express = require('express');
const router = express();
const rentersController = require('../controllers/renters');
const validation = require('../middleware/validate');

router.get('/', rentersController.getAll);

router.get('/:id', rentersController.getSingle);

// router.get('/:status', employeesController.getCarByStatus);

// router.post('/', validation.saveRenter, rentersController.createRenter);

// router.put('/:id', validation.saveRenter, rentersController.updateRenter);

// router.delete('/:id', rentersController.deleteRenter);

module.exports = router