const employeesController = require('../controllers/employees');
const validation = require('../middleware/validate');

router.get('/', employeesController.getAll);

router.get('/:id', employeesController.getSingle);



module.exports = router