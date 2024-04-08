const express = require('express');
const router = express();
const rentersController = require('../controllers/rentals');
const validation = require('../middleware/validate');

const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', rentersController.getAll);
router.get('/:id', rentersController.getRental);

router.post('/',  validation.saveRental, rentersController.createRental);
router.put('/:id', validation.saveRental, rentersController.updateRental);
router.delete('/:id',  rentersController.deleteRental);


module.exports = router