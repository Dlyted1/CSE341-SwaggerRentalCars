const express = require('express');
const router = express();
const rentersController = require('../controllers/rentals');
const validation = require('../middleware/validate');

const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', rentersController.getAll);
router.get('/:id', rentersController.getRental);

router.post('/', isAuthenticated, validation.saveRental, rentersController.createRental);
router.put('/:id', isAuthenticated, validation.saveRental, rentersController.updateRental);
router.delete('/:id', isAuthenticated, rentersController.deleteRental);


module.exports = router