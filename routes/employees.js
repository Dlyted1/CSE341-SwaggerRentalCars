const express = require('express');
const router = express();
const employeesController = require('../controllers/employees');
const validation = require('../middleware/validate');

const { isAuthenticated } = require('../middleware/authenticate');

router.get('/', employeesController.getAll);
router.get('/:id', employeesController.getEmployee);


router.post('/login', isAuthenticated, employeesController.employeeLogin);
router.post('/logout', isAuthenticated, employeesController.employeeLogout);
router.post('/', isAuthenticated, validation.saveEmployee, employeesController.createEmployee);
router.put('/:id', isAuthenticated, validation.saveEmployee, employeesController.updateEmployee);
router.delete('/:id', isAuthenticated, employeesController.deleteEmployee);

module.exports = router