const express = require('express');
const router = express();
const employeesController = require('../controllers/employees');
const validation = require('../middleware/validate');

router.get('/', employeesController.getAll);

router.get('/:id', employeesController.getEmployee);

router.post('/',  employeesController.createEmployee);

router.put('/:id', employeesController.updateEmployee);

router.delete('/:id', employeesController.deleteEmployee);

module.exports = router