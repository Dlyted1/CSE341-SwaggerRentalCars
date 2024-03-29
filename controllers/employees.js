const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;// Id mongo assigns all database entries (primary key)

let err;

const getAll = async (req, res) => {
  // swagger.tags=['employees']
  /*
    #swagger.description = 'Returns all employees in the database.';
    */
    const result = await mongodb.getDb()
    .db()
    .collection('employees')
    .find();
    result.toArray().then((employees) => {
      res.setHeader('Content-Type', "application/json");
      res.status(200).json(employees);
    });
  };


const getEmployee = async (req, res) => {
  // swagger.tags=['employees']
  /*
    #swagger.description = 'Returns a employee from the database using the employees ID number';
    */
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid employee id.')
    }
    const employeeId = new ObjectId(req.params.id)
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid employee id.')
    }
    const result = await mongodb.getDb().db().collection('employees').find({ _id: employeeId });
    result.toArray().then((employee) => {
     res.setHeader('Content-Type', "application/json");
     res.status(200).json(employee[0]);
    });
  };

  const createEmployee = (req, res) => {
  // swagger.tags=['employees']
  /*
    #swagger.description = 'Create a employee in the database, every field is required. The empolyee ID number is automatically assigned by the database after submition.
    Any field that is ommitted will be set to "NULL"';
    */
    pass
  }

  const employeeLogin = (req, res) => {
    pass
  }
  
  const employeeLogout = (req, res) => {
    pass
  }
  
  const updateEmployee = (req, res) => {
    pass
  }
  
  const deleteEmployee = (req, res) => {
    pass
  }


module.exports = {
  getAll,
  getEmployee,
  employeeLogin,
  employeeLogout,
  createEmployee,
  updateEmployee,
  deleteEmployee
}
