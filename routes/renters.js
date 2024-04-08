const express = require('express');
const router = express();
const rentersController = require('../controllers/renters');
const validation = require('../middleware/validate');

const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', rentersController.getAll);
router.get('/:id', rentersController.getRenter);

router.post('/',  validation.saveRenter, rentersController.createRenter);
router.put('/:id', validation.saveRenter, rentersController.updateRenter);
router.delete('/:id',  rentersController.deleteRenter);


module.exports = router